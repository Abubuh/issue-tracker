import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";
import { pbkdf2Sync, randomBytes } from "crypto";
import { DataSource } from "typeorm";
import { TypeormStore } from "connect-typeorm";
import { Session } from "./src/entities/Session";
import { User } from "./src/entities/User";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;
dotenv.config();
const SQLiteDataSource = new DataSource({
  type: "sqlite",
  database: "./db",
  synchronize: true,
  entities: [
    "./src/entities/*.ts"
  ]
});
const sessionStore = new TypeormStore({
  cleanupLimit: 2,
  ttl: 86400
});

SQLiteDataSource.initialize()
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));

const server = async () => {
  app.use(cors());
  app.use(express.json());
  app.use("/", express.static("./public"));
  app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      name: "abubuh.cookie",
      cookie: {
        sameSite: false
      },
      store: sessionStore.connect(SQLiteDataSource.getRepository(Session))
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async (username: string, password: string, done) => {
      const user = await User.findOneBy({username})
      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      const hashedPassword = pbkdf2Sync(
        password,
        user.salt,
        310000,
        69,
        "sha256"
      );
      if (hashedPassword.toString("hex") !== user.password) {
        return done(null, false, { message: "User not found" });
      }
      return done(null, user);
    })
  );

  passport.serializeUser((user, done) => {
    const u = user as User;
    done(null, u.id);
  });

  passport.deserializeUser(async (req: Request, userId: number, done: any) => {
    const user = await User.findOneBy({id: userId})
    done(null, user);
  });

  app.post("/api/signup", async (req: Request, res: Response) => {
    const { name, username, password } = req.body;
    const salt = randomBytes(16).toString("hex");
    const hashedPassword = pbkdf2Sync(password, salt, 310000, 69, "sha256");
    const user = new User()
    user.name = name
    user.username = username
    user.email = username
    user.password = hashedPassword.toString("hex")
    user.salt = salt
    user.save()
    req.logIn(user, (err) => {
      return res.status(204).json();
    });
  });

  app.post("/api/login", (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("local", (err, user, info) => {
      if (!user) {
        return res.status(404).json(info);
      }
      req.logIn(user, (err) => {
        return res.status(204).json();
      });
    })(req, res, next);
  });

  app.post("/api/logout", function (req:Request, res:Response, next:NextFunction) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/api/hello");
    });
  });

  app.get("/api/hello", (req: Request, res: Response, next: NextFunction) => {
    if (!req.isAuthenticated()) {
      return res.status(400).json({ error: "You must be logged in" });
    }
    return res.json({ data: SQLiteDataSource.getRepository });
  });

  // app.post("/api/users", async (request: Request, response: Response) => {
  //id= users.length+1
  //   const user = await orm.em.create(User, {
  //     id: "2",
  //     name: "Test",
  //     email: "carlosmishuevos@gmail.com",
  //     username: "Carlangas",
  //   });
  //   await orm.em.persistAndFlush([user]);
  //   response.json({ user });
  // });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

server()
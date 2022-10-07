# Sample Node, React and TS monorepo

This repository contains a boilerplate for a simple React TS (Vite) and Node TS application. Each one is in it's own package, while the outer package.json provides a way to install all dependencies, spin up the development environment and build the production files.

Some important commands:
- `npm run dev:api` to spin up the dev server for the node api (using nodemon)
- `npm run dev:app` to spin up the dev server for the react app (using Vite)
- `npm run build` to build the app, copy the dist files to the api's static folder and then building the api package
- `npm run start` to run the built server in production mode

You can always target and specific workspace command by using: `npm run <command> --workspace=<your-workspace>`.

*Importante note:*

Dependencies in both `api/package.json` and `app/package.json`, are flatten and installed in a single `node_modules` folder at root level. Please don't run individual installs in each package, just install normally in root folder.

This was built using `npm@8.13.2` and `node@16.14.0`, please consider this.
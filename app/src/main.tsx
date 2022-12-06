import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Home } from './components/Home'
import { SignUp } from './components/Signup'
import { ProjectView } from './components/ProjectView'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css'
import { Login } from './components/Login';

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/Signup",
    element: <SignUp />,
  },
  {
    path: "/project",
    element: <ProjectView />,
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

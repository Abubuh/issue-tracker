import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LoggedIn } from './components/LoggedIn'
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
    element: <LoggedIn />,
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

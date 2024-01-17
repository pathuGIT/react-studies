import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Service from './pages/Service.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/about",
    element: <Service />,
  },
  {
    path: "/contact",
    element: <Service />,
  },
  {
    path: "/login",
    element: <Service />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

import "../global.css";
import "../styleguide.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { HoverDocumentation } from "./screens/HoverDocumentation";
import { Homepage } from "./screens/Homepage";
import { BallBalance } from "./screens/BallBalance";
import { Pendulum } from "./screens/Pendulum";
import { Servo } from "./screens/Servo";
import { HoverRT } from "./screens/HoverRT";
import { HoverSim } from "./screens/HoverSim";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    }, 
    {
        path: "/Hover-Documentation",
        element: <HoverDocumentation/>,
    },
    {
        path: "/hover-simulation",
        element: <HoverSim/>,
    },
    {
        path: "/hover-realtime",
        element: <HoverRT/>,
    },
    {
        path: "/simulation-ballbalance",
        element: <BallBalance/>,
    },
    {
        path:"/simulation-servo",
        element:<Servo/>
    },
    {
        path:"/simulation-pendulum",
        element:<Pendulum/>
    },
]);

root.render(<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>);
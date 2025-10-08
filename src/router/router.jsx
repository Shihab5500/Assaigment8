

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import Details from "../pages/Details";

import Route404 from "../pages/Route404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "apps", element: <Apps /> },
      { path: "apps/:id", element: <Details /> },
      { path: "installation", element: <Installation /> },
      { path: "*", element: <Route404 /> },
    ],
  },
]);

export default router;


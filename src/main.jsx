

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { InstallProvider } from "./context/InstallContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InstallProvider>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
    </InstallProvider>
  </React.StrictMode>
);


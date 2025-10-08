// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import router from "./router/router";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );



// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import router from "./router/router";
// import { InstallProvider } from "./context/InstallContext";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <InstallProvider>
//       <RouterProvider
//         router={router}
//         future={{ v7_startTransition: true }}  // v7 future flag (optional warning fix)
//       />
//     </InstallProvider>
//   </React.StrictMode>
// );


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

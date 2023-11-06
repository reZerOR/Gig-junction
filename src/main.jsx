import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.css";
import router from "./Router/Router";
import { RouterProvider } from "react-router-dom";
import Provider from "./Provider/Provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

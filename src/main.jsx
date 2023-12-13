import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.css";
import router from "./Router/Router";
import { RouterProvider } from "react-router-dom";
import Provider from "./Provider/Provider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

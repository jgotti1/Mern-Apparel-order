import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ApperalContextProvider } from "./context/ApperalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ApperalContextProvider>
      <App />
    </ApperalContextProvider>
  </AuthContextProvider>
);

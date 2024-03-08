import { defineCustomElements } from "@ionic/pwa-elements/loader";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import React from "react";
import "./app.css";

defineCustomElements(window);

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

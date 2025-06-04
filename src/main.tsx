import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "./lib/i18n"; //Import to insure i18n initializes

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/health-guide/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

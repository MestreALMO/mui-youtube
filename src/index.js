import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { StylesGlobal } from "./styles/stylesGlobal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <StylesGlobal />

    <App />
  </React.StrictMode>
);

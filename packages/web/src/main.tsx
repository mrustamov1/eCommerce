// import { StrictMode } from "react";
import "./styles/global.css";
import "./styles/font-awesome.css";
import { App } from "./app/app.component";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DevHubConnect } from "./DevHubConnect.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DevHubConnect />
  </StrictMode>,
);

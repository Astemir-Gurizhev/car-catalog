import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./components/Router";
import "./assets/styles/global.css";
import AuthProvider from "./providers/AuthProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </StrictMode>
);

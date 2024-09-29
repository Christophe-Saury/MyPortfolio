import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider
      setLanguage={function (language: string): void {
        throw new Error("Function not implemented.");
      }}
      language={""}
    >
      <App />
    </LanguageProvider>
  </StrictMode>
);

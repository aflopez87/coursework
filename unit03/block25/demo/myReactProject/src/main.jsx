import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from ".App";
import { RecipeProvider } from "./UseRecipe";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

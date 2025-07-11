import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./layout/Layout";
import { PageProvider } from "./layout/PageContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageProvider>
      <Layout>
        <App />
      </Layout>
    </PageProvider>
  </StrictMode>,
);

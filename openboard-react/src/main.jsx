import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router"; //Habilita o roteamento baseado na URL do navegador
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* BrowserRouter envolve toda a aplicação para que rotas e <Link> funcionem */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
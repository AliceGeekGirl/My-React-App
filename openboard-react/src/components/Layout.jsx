import { Outlet } from "react-router"; // Marca o espaço do meio onde cada tela vai aparecer
import Header from "./Header"; // Importa o topo
import Footer from "./Footer"; // Importa o rodapé

// Casca fixa que envolve todas as rotas do site
function Layout() {
  return (
    <div>
      {/* Topo fixo no alto da tela */}
      <Header />

      {/* Área central que troca conforme a tela acessada */}
      <main>
        <Outlet />
      </main>

      {/* Rodapé fixo na parte de baixo da tela */}
      <Footer />
    </div>
  );
}

export default Layout;
import { Outlet } from "react-router"; //Renderiza a rota filha ativa dentro do layout compartilhado
import Header from "./Header"; //Topo comum às páginas
import Footer from "./Footer"; //Rodapé comum às páginas

//Estrutura compartilhada que mantém Header e Footer fixos entre as rotas
function Layout() {
  return (
    <div>
      {/* Cabeçalho exibido em todas as telas que usam Layout */}
      <Header />

      {/* Área central onde entra HomePage, VagaPage, CadastroPage ou NaoEncontradaPage */}
      <main>
        <Outlet />
      </main>

      {/* Rodapé exibido em todas as telas que usam Layout */}
      <Footer />
    </div>
  );
}

export default Layout;
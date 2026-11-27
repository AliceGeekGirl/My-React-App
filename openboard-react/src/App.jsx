import { Route, Routes } from "react-router"; //Componentes de definição de rotas do React Router
import "./App.css"; //Estilos globais do OpenBoard
import Layout from "./components/Layout"; //Moldura com Header e Footer
import HomePage from "./pages/HomePage"; //Tela inicial ("/")
import VagaPage from "./pages/VagaPage"; //Tela de detalhes da vaga ("/vagas/:id")
import NaoEncontradaPage from "./pages/NaoEncontradaPage"; //Tela 404 para rotas inválidas ("*")

//Centraliza o mapa de rotas da aplicação
function App() {
  return (
    <Routes>
      
      {/* Rota pai que aplica Header e Footer em todas as páginas internas */}
      <Route path="/" element={<Layout />}>
        {/* Tela inicial quando a URL é exatamente "/" */}
        <Route index element={<HomePage />} />

        {/* Tela de detalhe de uma vaga específica conforme o id na URL */}
        <Route path="vagas/:id" element={<VagaPage />} />

        {/* Quando a sua colega criar a CadastroPage em "/publicar", entra aqui: */}
        {/* <Route path="publicar" element={<CadastroPage />} /> */}

        {/* Rota coringa para qualquer caminho não encontrado (exibe o 404) */}
        <Route path="*" element={<NaoEncontradaPage />} />
      </Route>
    </Routes>
  );
}

export default App;
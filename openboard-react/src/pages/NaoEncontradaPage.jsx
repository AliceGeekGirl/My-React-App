import { Link } from "react-router"; //Link interno do React Router para voltar sem recarregar

//Tela exibida quando o usuário acessa uma rota que não existe
function NaoEncontradaPage() {
  return (
    <section className="hero">
      <h2>404 - Página não encontrada</h2>
      <p>O endereço que você tentou acessar não existe no OpenBoard.</p>
      <Link to="/" className="btn">
        Voltar para a home
      </Link>
    </section>
  );
}

export default NaoEncontradaPage;
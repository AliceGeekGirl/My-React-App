import { Link } from "react-router"; // Permite navegar entre telas sem recarregar a página

// Topo do site, que aparece em todas as páginas via Layout
function Header() {
  return (
    <header>
      {/* Logo/nome do site que leva de volta para a tela inicial (/)*/}
      <Link to="/">OpenBoard</Link>

      {/* Link que abre a tela de cadastrar nova vaga (/publicar) */}
      <Link to="/publicar">Publicar vaga</Link>
    </header>
  );
}

export default Header;
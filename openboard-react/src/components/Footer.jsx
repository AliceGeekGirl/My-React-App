// Rodapé do site, que aparece em todas as páginas via Layout[cite: 4, 8]
function Footer() {
  return (
    <footer>
      {/* Texto simples de rodapé do OpenBoard */}
      <p>OpenBoard — Quadro de vagas</p>
      {/* Links simples do rodapé (sem recarregar se forem internos) */}
      <p>Feito em React</p>
      {/* Links do rodapé convertidos sem usar <a href> em links internos[cite: 4, 8] */}
      <nav>
        {/* Como não existe tela de login no mapa do projeto, pode apontar para / ou ficar como botão/texto */}
        <Link to="/">Entrar</Link>

        {/* Rota oficial de cadastro de vaga definida no trabalho */}
        <Link to="/publicar">Publicar vaga</Link>

        {/* Como não há rota específica para "Sobre" e "Privacidade", evitamos <a href=""> */}
        <Link to="/">Sobre</Link>
        <Link to="/">Privacidade</Link>
      </nav>
    </footer>
  );
}

export default Footer;

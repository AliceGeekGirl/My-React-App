import Hero from "./Hero"; // Reaproveita o componente Hero para a seção de newsletter

//Bloco visual da newsletter na página inicial
function News() {
  return (
    <Hero
      titulo="Vagas novas, toda quinta-feira"
      subtitulo="Um resumo curto das melhores vagas em startups direto no seu inbox."
    >
      {/* Conteúdo filho (children) renderizado dentro do Hero */}
      <div className="cadastro">
        <form>
          <input type="email" placeholder="seu@mail.com" />
          <button type="submit" className="btn">
            Assinar
          </button>
        </form>
      </div>
    </Hero>
  );
}

export default News;
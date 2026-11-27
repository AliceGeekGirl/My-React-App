//Bloco reutilizável de destaque (usado no topo com botão e na newsletter com formulário)
function Hero({ titulo, subtitulo, children }) {
  return (
    <section className="hero">
      {/* Título principal recebido por prop */}
      <h2>{titulo}</h2>

      {/* Subtítulo descritivo recebido por prop */}
      <p>{subtitulo}</p>

      {/* Conteúdo extra passado entre as tags <Hero> e </Hero> */}
      {children}
    </section>
  );
}

export default Hero;
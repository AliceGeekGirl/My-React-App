import Depoimentos from "../components/Depoimentos";
import Hero from "../components/Hero";
import News from "../components/News";

function HomePage() {
  return (
    <div>
      <header>
        <h1>OpenBoard</h1>
        <div>
          <a href="#entrar">Entrar</a>
          <button className="btn">Publicar vaga</button>
        </div>
      </header>

      <Hero
        titulo="As melhores vagas em startups de tecnologia"
        subtitulo="Encontre oportunidades reais em empresas curadas. Sem cadastro, sem barreiras."
      >
        <button className="btn">Publicar vaga</button>
      </Hero>

      <main className="conteudo">
        <section className="vagas">
          <div className="vagas__header">
            <h2>Últimas Vagas</h2>
            <span>3 vagas - Atualizado agora</span>
          </div>

          <div className="vagas__card">
            <div className="vagas__avatar">V</div>
            <div className="vagas__body">
              <small>Vercel</small>
              <p className="vagas__title">Full-stack Engineer</p>
              <span className="vagas__badge">R$ 20k-30k</span>
              <span className="vagas__badge vagas__badge--highlight">Remoto</span>
            </div>
            <div className="vagas__actions">
              <span>4h</span>
              <button className="btn">Ver vaga</button>
            </div>
          </div>

          <div className="vagas__card">
            <div className="vagas__avatar">S</div>
            <div className="vagas__body">
              <small>SATC Labs</small>
              <p className="vagas__title">Product Designer</p>
              <span className="vagas__badge">R$ 8k-12k</span>
              <span className="vagas__badge vagas__badge--highlight">Remoto</span>
            </div>
            <div className="vagas__actions">
              <span>2d</span>
              <button className="btn">Ver vaga</button>
            </div>
          </div>
        </section>

        <aside className="filtros">
          <div className="filtros__header">
            <h3>Filtros</h3>
            <span>limpar</span>
          </div>

          <div className="filtros__itens">
            <p>Tipo de vaga</p>
            <label><input type="checkbox" /> Efetivo</label>
            <label><input type="checkbox" /> Estágio</label>
            <label><input type="checkbox" /> Temporário</label>
          </div>

          <div className="filtros__itens">
            <p>Área</p>
            <label><input type="checkbox" /> Engenharia</label>
            <label><input type="checkbox" /> Design</label>
            <label><input type="checkbox" /> Gestão</label>
          </div>
        </aside>
      </main>

      {/* Agora usa o componente News com validação e sem recarregar */}
      <News />

      <Depoimentos />

      <footer>
        <p>
          <strong>OpenBoard</strong> 2026 - Todos os direitos reservados
        </p>
        <nav>
          <span>Entrar</span>
          <span>Publicar vaga</span>
          <span>Sobre</span>
          <span>Privacidade</span>
        </nav>
      </footer>
    </div>
  );
}

export default HomePage;
import { useEffect, useState } from "react"; //Hooks de estado e ciclo de vida/efeito do React
import Depoimentos from "../components/Depoimentos"; //Seção de depoimentos com cartões
import Hero from "../components/Hero"; //Componente reutilizável de destaque
import News from "../components/News"; //Seção da newsletter com validação
import VagaCard from "../components/VagaCard"; //Cartão individual de cada vaga
import { buscarVagas } from "../services/vagasService"; //Função que busca as vagas no JSON via fetch

//Tela inicial da aplicação (rota "/")
function HomePage() {
  //Armazena a lista de vagas carregada da API/JSON
  const [vagas, setVagas] = useState([]);
  //Controla se a busca inicial ainda está em andamento
  const [carregando, setCarregando] = useState(true);
  //Guarda mensagem de erro caso o fetch falhe ou o arquivo não exista
  const [erro, setErro] = useState("");

  //Executa uma vez quando a HomePage monta na tela (array de dependências vazio [])
  useEffect(() => {
    async function carregarVagas() {
      try {
        setCarregando(true); //Mostra o aviso de carregamento antes de buscar
        setErro(""); //Limpa qualquer erro anterior
        const dados = await buscarVagas(); //Chama o service que faz fetch em /api/vagas.json
        setVagas(dados); //Salva as vagas recebidas no estado
      } catch {

        //Se falhar (ex.: vagas.json renomeado), exibe o erro sem quebrar o resto da tela
        setErro("Não foi possível carregar as vagas no momento.");
      } finally {

        //Encerra o estado de carregamento tanto no sucesso quanto no erro
        setCarregando(false);
      }
    }

    carregarVagas();
  }, []);

  return (
    <div>

      {/* Hero do topo reaproveitando o componente com children */}
      <Hero
        titulo="As melhores vagas em startups de tecnologia"
        subtitulo="Encontre oportunidades reais em empresas curadas. Sem cadastro, sem barreiras."
      >
        <button className="btn">Publicar vaga</button>
      </Hero>

      {/* Área principal com a barra lateral de filtros e a lista de vagas */}
      <main className="conteudo">
        <section className="vagas">
          <div className="vagas__header">
            <h2>Últimas Vagas</h2>
            {/* Contador dinâmico conforme a quantidade de vagas carregadas */}
            <span>{vagas.length} vagas - Atualizado agora</span>
          </div>

          {/* Renderização condicional: carregando, erro ou lista de vagas */}
          {carregando && <p>Carregando vagas...</p>}
          {!carregando && erro && <p role="alert">{erro}</p>}
          {!carregando && !erro && (
            <div>
              {/* Renderiza um VagaCard para cada item usando id único como key */}
              {vagas.map((vaga) => (
                <VagaCard key={vaga.id} vaga={vaga} />
              ))}
            </div>
          )}
        </section>

        {/* Coluna lateral de filtros */}
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

      {/* Seção de newsletter */}
      <News />

      {/* Seção de depoimentos */}
      <Depoimentos />

    </div>
  );
}

export default HomePage;
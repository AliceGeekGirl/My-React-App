import { useEffect, useState } from "react";
import { Link, useParams } from "react-router"; // useParams lê o :id da URL; Link navega sem recarregar
import { buscarVaga } from "../services/vagasService"; // Reaproveita a busca de uma vaga por id

// Tela de detalhes de uma vaga específica (rota "/vagas/:id")
function VagaPage() {
  // Pega o parâmetro dinânimico :id da URL atual
  const { id } = useParams();

  // Estados para os dados da vaga, carregamento e erro/não encontrada
  const [vaga, setVaga] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  // Busca a vaga sempre que o :id na URL mudar
  useEffect(() => {
    async function carregarDetalhe() {
      try {
        setCarregando(true);
        setErro("");
        setVaga(null);
        const dados = await buscarVaga(id);
        setVaga(dados);
      } catch {
        // Exibido por exemplo ao acessar /vagas/999 ou um id inexistente
        setErro("Vaga não encontrada.");
      } finally {
        setCarregando(false);
      }
    }

    carregarDetalhe();
  }, [id]);

  return (
    <section className="conteudo">
      <article className="vagas">
        {/* Estado de carregamento */}
        {carregando && <p>Carregando detalhes da vaga...</p>}

        {/* Mensagem caso a vaga não exista */}
        {!carregando && erro && (
          <div>
            <h2>{erro}</h2>
            <p>A vaga solicitada não foi encontrada ou não existe mais.</p>
          </div>
        )}

        {/* Dados completos da vaga quando encontrada */}
        {!carregando && !erro && vaga && (
          <div className="vagas__card">
            <div className="vagas__body">
              <small>{vaga.empresa}</small>
              <h2 className="vagas__title">{vaga.cargo}</h2>
              <span className="vagas__badge">{vaga.salario}</span>
              <span className="vagas__badge vagas__badge--highlight">{vaga.modelo}</span>
              <p style={{ marginTop: "16px" }}>{vaga.descricao}</p>
            </div>
          </div>
        )}

        {/* Link obrigatório para voltar à lista principal */}
        <div style={{ marginTop: "24px" }}>
          <Link to="/" className="btn">
            Voltar para as vagas
          </Link>
        </div>
      </article>
    </section>
  );
}

export default VagaPage;
import depoimentos from "../data/depoimentos"; // Importa a lista de depoimentos
import DepoimentoCard from "./DepoimentoCard"; // Importa o cartão individual

// Monta a seção completa de depoimentos
function Depoimentos() {
  return (
    <section className="depoimentos">
      {/* Título da seção */}
      <h2>Depoimentos</h2>
      <p>Depoimentos de recrutadores e candidatos que ja fecharam vaga por aqui.</p>

      {/* Lista que reúne os cartões na tela */}
      <div className="depoimentos__list">
        {/* Percorre cada item e cria um cartão com chave única (id) */}
        {depoimentos.map((item) => (
          <DepoimentoCard key={item.id} depoimento={item} />
        ))}
      </div>
    </section>
  );
}

export default Depoimentos;
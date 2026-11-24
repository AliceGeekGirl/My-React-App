// Mostra apenas um cartão de depoimento na tela
function DepoimentoCard({ depoimento }) {
  return (
    <div className="depoimento-card">
      {/* Exibe o texto do depoimento */}
      <p>{depoimento.texto}</p>
      {/* Exibe o nome da pessoa */}
      <strong>{depoimento.nome}</strong>
      {/* Exibe o cargo da pessoa */}
      <span>{depoimento.cargo}</span>
    </div>
  );
}

export default DepoimentoCard;
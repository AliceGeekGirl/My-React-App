import { Link } from "react-router"; //Navegação interna para os detalhes da vaga

//Cartão individual de vaga, usado na lista e na confirmação de cadastro
function VagaCard({ vaga }) {

  //Pega a primeira letra da empresa para usar no avatar caso não haja imagem
  const inicial = vaga.empresa ? vaga.empresa.charAt(0).toUpperCase() : "V";

  return (
    <article className="vagas__card">
        
      {/* Quadrado inicial com a letra da empresa */}
      <div className="vagas__avatar">{inicial}</div>

      {/* Informações principais da vaga */}
      <div className="vagas__body">
        <small>{vaga.empresa}</small>
        <p className="vagas__title">{vaga.cargo}</p>
        <span className="vagas__badge">{vaga.salario}</span>
        <span className="vagas__badge vagas__badge--highlight">{vaga.modelo}</span>
      </div>

      {/* Tempo de publicação e link para abrir os detalhes da vaga */}
      <div className="vagas__actions">
        <span>{vaga.publicada}</span>
        <Link to={`/vagas/${vaga.id}`} className="btn">
          Ver vaga
        </Link>
      </div>
    </article>
  );
}

export default VagaCard;
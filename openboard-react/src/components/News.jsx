import { useState } from "react";
import Hero from "./Hero"; // Reaproveita o Hero passando título, subtítulo e children

// Seção da newsletter com formulário controlado e validação
function News() {
  // Estados controlados do formulário
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  const [inscritoEmail, setInscritoEmail] = useState("");

  // Validação simples para checar se existe "@" e um domínio com "." após o "@"
  function emailValido(valor) {
    const texto = valor.trim();
    const indiceArroba = texto.indexOf("@");
    if (indiceArroba <= 0) return false;

    const parteFinal = texto.slice(indiceArroba + 1);
    return parteFinal.includes(".") && !parteFinal.startsWith(".") && !parteFinal.endsWith(".");
  }

  function lidarComEnvio(evento) {
    // Impede o navegador de recarregar a página ao enviar o formulário
    evento.preventDefault();

    if (!emailValido(email)) {
      setErro("Digite um e-mail válido (ex.: ana@mail.com).");
      return;
    }

    // Limpa erro anterior, salva o e-mail confirmado e limpa o campo
    setErro("");
    setInscritoEmail(email.trim());
    setEmail("");
  }

  return (
    <Hero
      titulo="Vagas novas, toda quinta-feira"
      subtitulo="Um resumo curto das melhores vagas em startups direto no seu inbox."
    >
      <div className="cadastro">
        {/* Renderização condicional: mostra confirmação quando inscrito, ou o formulário */}
        {inscritoEmail ? (
          <p>E-mail cadastrado com sucesso: {inscritoEmail}</p>
        ) : (
          <form onSubmit={lidarComEnvio} noValidate>
            <input
              type="email"
              placeholder="seu@mail.com"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
            <button type="submit" className="btn">
              Assinar
            </button>

            {/* Exibe mensagem de erro apenas quando houver falha de validação */}
            {erro && <p role="alert">{erro}</p>}
          </form>
        )}
      </div>
    </Hero>
  );
}

export default News;
//Busca todas as vagas disponíveis no arquivo JSON servido pelo Vite
export async function buscarVagas() {
  const resposta = await fetch("/api/vagas.json");

  //Garante que a requisição respondeu com sucesso antes de ler o JSON
  if (!resposta.ok) {
    throw new Error("Não foi possível carregar as vagas.");
  }

  const dados = await resposta.json();
  return dados;
}

//Busca uma única vaga pelo id informado na rota
export async function buscarVaga(id) {
  const vagas = await buscarVagas();

  //Compara usando Number para evitar problema de id em string vs número
  const vagaEncontrada = vagas.find((item) => Number(item.id) === Number(id));

  if (!vagaEncontrada) {
    throw new Error("Vaga não encontrada.");
  }

  return vagaEncontrada;
}
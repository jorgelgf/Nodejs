async function fetchPesquisa(url) {
  let response = await fetch(url);
  let json = await response.json();
  return json;
}

const valor = fetchPesquisa(
  "http://files.cod3r.com.br/curso-js/funcionarios.json"
);

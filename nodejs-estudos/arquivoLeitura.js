const fs = require("fs");
//----processo de leitura de arquivo
//sincrono...  __dirname é o diretorio atual
const caminho = __dirname + "/arquivo.json";
const conteudo = fs.readFileSync(caminho, "utf-8");

console.log(conteudo);

//assincrono...
fs.readFile(caminho, "utf-8", (err, conteudo) => {
  const { db } = JSON.parse(conteudo);
  console.log(`${db.host}:${db.port}`);
});

const { db } = require("./arquivo.json");
console.log("instanciando diretamente:", db);
//----processo de leitura de arquivo fim.

//processo de leitura de pasta

fs.readdir(__dirname, (err, arquivos) => {
  console.log("conteudo da pasta....\n");
  console.log(arquivos);
});

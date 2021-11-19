const fs = require("fs");

const produto = {
  nome: "Celular",
  preco: 12345.99,
  desconto: 0.15,
};

fs.writeFile(
  __dirname + "/arquivoGerado.json",
  JSON.stringify(produto),
  (err) => {
    //se der erro ele mostra no console o erro, se nao ele informa Arquivo salvo"
    console.log(err || "Arquivo salvo!");
  }
);

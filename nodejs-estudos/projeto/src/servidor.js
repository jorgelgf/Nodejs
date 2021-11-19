const porta = 3003;

const express = require("express");
const app = express();
const {
  salvarProduto,
  getProduto,
  getProdutos,
  excluirProduto,
} = require("./bandoDeDados");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
//realizando requisição para todos os produtos
app.get("/produtos", (req, res, next) => {
  res.send(getProdutos()); //converte para json metodo send
});

//realizando requisição um produto apenas
app.get("/produtos/:id", (req, res, next) => {
  res.send(getProduto(req.params.id));
});

//submetendo valores
app.post("/produtos", (req, res, next) => {
  const produto = salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto); //Gerando JSON
});

//usado para modificar valores na base de dados
app.put("/produtos/:id", (req, res, next) => {
  const produto = salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco,
  });
  res.send(produto);
});

app.delete("/produtos/:id", (req, res, next) => {
  const produto = excluirProduto(req.params.id);
  res.send(produto); //Gerando JSON
});

//se for usado app.use ele usará esse processo como padrão para qualquer
//outro processo que esteja fora do endereço de requisição exemplo abaixo:
/*
Obs.: Não precisa de por o path
app.use((req, res, next) => {
  res.send({ nome: "Notebook", preco: 123.45 }); //converte para json metodo send
});

*/
//informando a porta
app.listen(porta, () => console.log(`Servidor está rodando na porta ${porta}`));

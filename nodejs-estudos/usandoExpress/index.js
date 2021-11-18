const express = require("express");

//importando o routes
const useRoute = require("./routes/useRoutes");
const app = express();
const port = 3001;

useRoute(app);
//req -> dados da requisicao; res -> resposta da requisicao
app.get("/", (req, res) => res.send("Olá mundo pelo express"));

//colocando a api pra executar na porta 3000
app.listen(port, () => console.log(`api rodando na porta ${port}`));

/*
    Métodos principais:
    listar usuários (GET);
    criar usuários (POST);
    modificar usuários (PUT);
    remover usuários (DELETE).
 */

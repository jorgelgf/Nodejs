//fs lida com os arquivos de sistema
//join lida com pastas de arquivos
const fs = require("fs");
const { join } = fs;

//criando um arquivo para armazenar os users do tipo json
const filePath = join(_dirname, "users.json");

//obtendo valor dos usuários dentro do BD
const getUsers = () => {
  //verificando se o arquivo existe, busca assincrona
  //se ele existir ele le se nao ele retorna vazio
  const data = fs.existsSync(filePath) ? fs.readFileSync(filePath) : [];

  //tratando erros
  //retorna json fazendo um parse com os dados ou retorna vazio se der problemas
  try {
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

//metodo para salvar usuarios
const saveUser = (users) =>
  fs.writeFileSync(filePath, JSON.stringify(users, null, "\t"));

const useRoute = (app) => {
  app.route("/users/:id?").get((req, res) => {
    const users = getUsers();
    res.send({ users });
  });
};
module.exports = useRoute;

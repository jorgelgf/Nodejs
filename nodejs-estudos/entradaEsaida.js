//capturando parametros inseridos diretamente pelo terminal
const anonimo = process.argv.indexOf("-a") !== -1;
//console.log(anonimo);
if (anonimo) {
  process.stdout.write("Fala Anônimo!\n");
  //matado processos
  process.exit();
} //se nao tiver parametro -a ira perguntar seu nome
else {
  process.stdout.write("Informe seu nome: ");
  process.stdin.on("data", (data) => {
    const nome = data.toString().replace("\n", "");
    process.stdout.write(`Fala ${nome}!! \n`);
    process.exit();
  });
}

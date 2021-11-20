const schedule = require("node-schedule");

/* Da esquerda pra direita
      dia da semana  (0 domingo)
      dia do mês
      dia do mes
      hora
      minuto
      tempo em segundos para execução (codigo escrito executa de cinco em cinco segundos)
*/
const tarefa1 = schedule.scheduleJob("*/5 * * * * *", () => {
  console.log("Executando Tarefa 1: ", new Date().getSeconds());
});

//cancelando tarefa no schedule

setTimeout(() => {
  tarefa1.cancel();
  console.log("Cancelando Tarefa 1");
}, 20000);

//regra de recorrência
const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 6)];
regra.hour = 9;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, () => {
  console.log("Executando Tarefa 2! ", new Date().getSeconds());
});

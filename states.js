const os = require("os");
const {log, returnCurrentDate} = require("./logger")
const { freemem, totalmem } = os;

setInterval(() => {
  const total = parseInt(totalmem() / 1024 / 1024);
  const free = parseInt(freemem() / 1024 / 1024);
  const percent = parseInt((free / total )*100);

  const memoryPerformance = {
    Total: `${total}MB`,
    Livre: `${free}MB`,
    freeMemory: `${percent}%`,
    memoryUsage: `${100-percent}%`
  }
  
  console.clear();
  console.log("==== DADOS DE MEMORIA RAM ====");
  console.table(memoryPerformance);
  log(`${ JSON.stringify(memoryPerformance)} \n`);

  if (percent <= 50) {
    console.log(`Memoria com ${memoryPerformance.memoryUsage} de uso -> DICA: feche alguns programas para manter a instabilidade! -> ${returnCurrentDate()}`);
    log(` ====> DICA: FECHE ALGUNS PROGRAMAS OU ABAS DO NAVEGADOR CASO ESTEJA USANDO PARA MANTER A INSTABILIDADE -> ${returnCurrentDate()} \n \n`)
  }
  
},1000);
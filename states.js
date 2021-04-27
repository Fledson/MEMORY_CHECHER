const os = require("os");
const { freemem, totalmem } = os;

setInterval(() => {
  const total = parseInt(totalmem() / 1024 / 1024);
  const free = parseInt(freemem() / 1024 / 1024);
  const percent = parseInt((free / total )*100);

  const perfom = {
    Total: `${total}MB`,
    Livre: `${free}MB`,
    Usada: `${percent}%`
  }
  
  console.clear();
  console.log("==== DADOS DE MEMORIA RAM ====");
  console.table(perfom);
},1000);
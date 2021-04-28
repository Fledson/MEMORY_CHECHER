const EventEmitter = require('events');
const fs = require('fs'); //=> modulo para manipulação de arquivos
const path = require('path');
const emitter = new EventEmitter();

emitter.on('log', (message) => {
  console.log(message);
});

function log(message) {
  fs.appendFile(path.join(__dirname, 'log.txt'), message, err => {
    if (err) throw err;
  })
}

function returnCurrentDate(){
  var dNow = new Date();
  var currentDate = `${dNow.getDate()}/${(dNow.getMonth()+1).toString().padStart(2, "0")}/${dNow.getFullYear()} ${dNow.getHours()}:${dNow.getMinutes()}`

  return currentDate;
  }

// exportando função
module.exports = {log, returnCurrentDate};
// module.exports = ;

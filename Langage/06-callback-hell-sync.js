const fs = require('fs');

function log(file, msg) {
  fs.appendFileSync(file, msg + '\n')
}

try {
  fs.statSync('logs');
}
catch (err) {
  fs.mkdirSync('logs');
}

try {
  log('logs/app.log', 'Ligne 1');
  log('logs/app.log', 'Ligne 2');
  log('logs/app.log', 'Ligne 3');
  log('logs/app.log', 'Ligne 4');
  log('logs/app.log', 'Ligne 5');
  console.log('Fin logs');
}
catch (err) {
  console.log(err.message);
}

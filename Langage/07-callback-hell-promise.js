const fs = require('fs');
const util = require('util');

const stat = util.promisify(fs.stat);
const mkdir = util.promisify(fs.mkdir);

function log(file, msg) {
  return new Promise((resolve, reject) => {
    fs.appendFile(file, msg + '\n', (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

stat('logs')
  .catch((err) => mkdir('logs'))
  .then(() => log('logs/app.log', 'Ligne 1'))
  .then(() => log('logs/app.log', 'Ligne 2'))
  .then(() => log('logs/app.log', 'Ligne 3'))
  .then(() => log('logs/app.log', 'Ligne 4'))
  .then(() => log('logs/app.log', 'Ligne 5'))
  .then(() => {
    console.log('Fin logs');
  })
  .catch((err) => {
    console.log(err.message);
  })

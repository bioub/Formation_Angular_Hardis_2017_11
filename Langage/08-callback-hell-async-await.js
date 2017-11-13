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

(async function() {
  try {
    await stat('logs');
  }
  catch (err) {
    await mkdir('logs');
  }

  try {
    await log('logs/app.log', 'Ligne 1');
    await log('logs/app.log', 'Ligne 2');
    await log('logs/app.log', 'Ligne 3');
    await log('logs/app.log', 'Ligne 4');
    await log('logs/app.log', 'Ligne 5');
    console.log('Fin logs');
  }
  catch (err) {
    console.log(err.message);
  }
}());

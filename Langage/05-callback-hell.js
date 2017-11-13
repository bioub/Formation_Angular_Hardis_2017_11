const fs = require('fs');

function log(file, msg, cb) {
  fs.appendFile(file, msg + '\n', cb)
}

fs.stat('logs', (err) => {
  if (err) {
    return fs.mkdir('logs', (err) => {
      next();
    });
  }
  next();
});

function next() {
  log('logs/app.log', 'Ligne 1', (err) => {
    if (err) {
      return console.log(err.message);
    }
    log('logs/app.log', 'Ligne 2', (err) => {
      if (err) {
        return console.log(err.message);
      }
      log('logs/app.log', 'Ligne 3', (err) => {
        if (err) {
          return console.log(err.message);
        }
        log('logs/app.log', 'Ligne 4', (err) => {
          if (err) {
            return console.log(err.message);
          }
          log('logs/app.log', 'Ligne 5', (err) => {
            if (err) {
              return console.log(err.message);
            }
            console.log('Fin logs');
          });
        });
      });
    });
  });
}

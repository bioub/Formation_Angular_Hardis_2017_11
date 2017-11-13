const Observable = require("rxjs").Observable;


/*
function timeout(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
(async function() {
  await timeout(1000);
  console.log('1s');
  await timeout(1000);
  console.log('1s');
}());
*/
/*
function interval(delay) {
  return new Promise((resolve) => {
    setInterval(resolve, delay);
  });
}

interval(1000)
  .then(() => {
    console.log('1s');
  });
  */

Observable.interval(1000)
  .subscribe(() => {
    console.log('1s');
  });

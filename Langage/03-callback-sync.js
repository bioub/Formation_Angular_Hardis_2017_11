
const nbs = [2, 3, 4];

nbs.filter(function (elt, i) {
  return elt > 2;
}).map(function (elt, i) {
  return elt + 1;
}).forEach(function (elt, i) {
  console.log(elt, i);
});

console.log('fin');

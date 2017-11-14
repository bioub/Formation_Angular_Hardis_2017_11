function externe(msg) {
  // Closure : portée sauvegardée
  // 2 conditions :
  // - 2 portées imbriquées (ici 2 fonctions)
  // - interne est appelable à l'extérieur
  function interne() {
    console.log(msg);
  }

  return interne;
}

const hello = externe('Hello');
console.log(hello); // function
hello(); // Hello


// 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

// Nouvel objet ponctuel, object literal
const coords2d = {
  x: 10,
  y: 20,
};

console.log(coords2d.x); // 10
console.log(coords2d.y); // 20

function createCoords2d(x, y) {
  return {
    x: x,
    y: y,
  };
}

const coords2dBis = createCoords2d(10, 20);

// Les objets sont extensibles
coords2dBis.z = 30;

// Mauvaise pratique d'étendre les objets standard
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3
delete Math.sum;

// Pour les objets récurrents, simule une classe
// avec une fonction, fonction constructeur :

function Contact(prenom) {
  this.prenom = prenom;
}

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this.prenom;
};

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain.hello()); // object

const jean = new Contact('Jean');
console.log(jean.hello()); // object
console.log(romain.hello === jean.hello);

class Voiture {
  constructor(marque) {
    // if (!marque) {
      this.marque = marque;
    // }
  }
  demarrer() {
    return `Vrrroommmm ${this.marque} !!!`;
  }
}

const p208 = new Voiture('Peugeot');
console.log(typeof Voiture); // function
console.log(p208.marque); // Peugeot
console.log(p208.demarrer()); // Vrrroommmm Peugeot


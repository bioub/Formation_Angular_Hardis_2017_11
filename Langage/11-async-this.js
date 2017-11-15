const contactES3 = {
  prenom: 'Romain',
  hello: function() {
    console.log('Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    var _this = this;
    setTimeout(function() {
      console.log('Bonjour je m\'appelle ' + _this.prenom);
    }, 1000);
  }
}

contactES3.hello();
contactES3.helloAsync();

const contactES5 = {
  prenom: 'Romain',
  hello: function() {
    console.log('Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    setTimeout(function() {
      console.log('Bonjour je m\'appelle ' + this.prenom);
    }.bind(this), 1000);
  },
  helloAsync2: function() {
    // Pas de closure (pas d'imbrication)
    setTimeout(this.hello.bind(this), 1000);
  }
}

contactES5.hello();
contactES5.helloAsync();
contactES5.helloAsync2();

const contactES6 = {
  prenom: 'Romain',
  hello() {
    console.log(`Bonjour je m'appelle ${this.prenom}`);
  },
  helloAsync() {
    setTimeout(() => {
      console.log(`Bonjour je m'appelle ${this.prenom}`);
    }, 1000);
  }
}

contactES6.hello();
contactES6.helloAsync();

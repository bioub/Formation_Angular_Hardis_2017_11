const localAuFichier = 'locale';

export class Horloge {
  constructor(options) {
    if (!options.container instanceof HTMLElement) {
      throw new Error('container must be a DOM Element');
    }
    this._container = options.container;
  }
  start() {
    const now = new Date();
    this._container.innerText = now.toLocaleTimeString();
    setTimeout(this.start.bind(this), 1000);
  }
}

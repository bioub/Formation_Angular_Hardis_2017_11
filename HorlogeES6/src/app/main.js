import { Horloge } from './horloge';

const elt = document.querySelector('.horloge');
const clock = new Horloge({
  container: elt,
});
clock.start();

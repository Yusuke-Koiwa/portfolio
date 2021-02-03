import 'intersection-observer';
import scrollama from 'scrollama';
import Rellax from 'rellax';

window.onload = () => {
  const scroller = scrollama();
  const rellax = new Rellax('.js-rellax');

  scroller
    .setup({
      step: '.js-step',
      offset: 0.75,
      once: true,
    })
    .onStepEnter((response) => {
      response.element.classList.add('active');
    });
  window.addEventListener('resize', scroller.resize);
};

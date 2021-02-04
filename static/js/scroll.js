import 'intersection-observer';
import scrollama from 'scrollama';

window.onload = () => {
  const scroller = scrollama();

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

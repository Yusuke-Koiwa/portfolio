'use strict';
const Delighters = new (function () {
  const self = this,
    dels = (this.dels = []),
    // default options
    options = {
      attribute: 'data-delighter',
      classNames: ['delighter', 'started'],
      start: 0.75, // default start threshold
    };
  let timeoutId;

  document.addEventListener('DOMContentLoaded', function () {
    init();
  });

  function init() {
    document.addEventListener('scroll', scroll);
    const els = document.querySelectorAll('[' + options.attribute + ']');

    for (let i = 0; i < els.length; i++) {
      const el = els[i],
        def = el.getAttribute(options.attribute, 2),
        pairs = def.split(';'),
        del = {};
      del.start = options.start;

      for (let j = 0; j < pairs.length; j++) {
        const pair = pairs[j].split(':'),
          name = pair[0],
          val = isNaN(pair[1] * 1) ? pair[1] : pair[1] * 1;
        if (name) del[name] = val === undefined ? true : val;
      }

      del.el = el;
      del.id = dels.length;
      dels.push(del);
      el.classList.add(options.classNames[0]);
    }
    scroll();
  }

  function scroll() {
    if (timeoutId) return;
    timeoutId = setTimeout(function () {
      const viewportHeight = window.innerHeight;
      for (let i = 0; i < dels.length; i++) {
        const del = dels[i],
          box = del.el.getBoundingClientRect(),
          factorStart = box.top / viewportHeight;
        if (factorStart < del.start && !del.started) {
          del.started = true;
          del.el.classList.add(options.classNames[1]);
        }
      }
      timeoutId = 0;
    }, 200);
  }

  self.init = init;
})();

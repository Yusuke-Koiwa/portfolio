<template functional>
  <picture>
    <source
      type="image/webp"
      :srcset="`
        /img/hero/rocket/rocket@400w.webp 400w,
        /img/hero/rocket/rocket@600w.webp 600w,
        /img/hero/rocket/rocket@800w.webp 800w,
        /img/hero/rocket/rocket@1200w.webp 1200w
      `"
    />
    <source
      type="image/png"
      :srcset="`
        /img/hero/rocket/rocket@400w.png 400w,
        /img/hero/rocket/rocket@600w.png 600w,
        /img/hero/rocket/rocket@800w.png 800w,
        /img/hero/rocket/rocket@1200w.png 1200w
      `"
    />
    <img src="/img/hero/rocket/rocket@600w.png" alt="" width="600" height="520" sizes="(max-width: 670px) 90vw, 600px" />
  </picture>
</template>

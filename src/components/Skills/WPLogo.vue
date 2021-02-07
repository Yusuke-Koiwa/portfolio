<template>
  <picture>
    <source type="image/webp" :srcset="[darkTheme ? webpSrcsetDark : webpSrcset]" />
    <source type="image/png" :srcset="[darkTheme ? pngSrcsetDark : pngSrcset]" />
    <img :src="[darkTheme ? imgSrcDark : imgSrc]" width="80" height="80" alt="" loading="lazy" class="w-20 h-auto mx-auto mb-10" />
  </picture>
</template>

<script>
export default {
  data() {
    return {
      webpSrcset: '/img/skills/wp/wordpress@80w.webp 1x, /img/skills/wp/wordpress@160w.webp 2x',
      pngSrcset: '/img/skills/wp/wordpress@80w.png 1x, /img/skills/wp/wordpress@160w.png 2x',
      imgSrc: '/img/skills/wp/wordpress@80w.png',
      webpSrcsetDark: '/img/skills/wp/wordpress-white@80w.webp 1x, /img/skills/wp/wordpress-white@160w.webp 2x',
      pngSrcsetDark: '/img/skills/wp/wordpress-white@80w.png 1x, /img/skills/wp/wordpress-white@160w.png 2x',
      imgSrcDark: '/img/skills/wp/wordpress-white@80w.png',
    };
  },
  props: {
    darkTheme: Boolean,
  },
};
</script>

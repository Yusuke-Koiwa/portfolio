<template>
  <picture v-show="!darkTheme">
    <source type="image/webp" srcset="/img/skills/wp/wordpress@80w.webp 1x, /img/skills/wp/wordpress@160w.webp 2x" />
    <source type="image/png" srcset="/img/skills/wp/wordpress@80w.png 1x, /img/skills/wp/wordpress@160w.png 2x" />
    <img src="/img/skills/wp/wordpress@80w.png" width="80" height="80" alt="" loading="lazy" class="w-20 h-auto mx-auto mb-10" />
  </picture>
  <picture v-show="darkTheme">
    <source type="image/webp" srcset="/img/skills/wp/wordpress-white@80w.webp 1x, /img/skills/wp/wordpress-white@160w.webp 2x" />
    <source type="image/png" srcset="/img/skills/wp/wordpress-white@80w.png 1x, /img/skills/wp/wordpress-white@160w.png 2x" />
    <img src="/img/skills/wp/wordpress-white@80w.png" width="80" height="80" alt="" loading="lazy" class="w-20 h-auto mx-auto mb-10" />
  </picture>
</template>

<script>
export default {
  props: {
    darkTheme: Boolean,
  },
};
</script>

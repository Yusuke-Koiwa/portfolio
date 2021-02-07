<template>
  <picture>
    <source type="image/webp" media="(max-width: 560px)" :srcset="[darkTheme ? webpSrcsetSmDark : webpSrcsetSm]" />
    <source type="image/webp" :srcset="[darkTheme ? webpSrcsetLgDark : webpSrcsetLg]" />
    <source type="image/png" media="(max-width: 560px)" :srcset="[darkTheme ? pngSrcsetSmDark : pngSrcsetSm]" />
    <source type="image/png" :srcset="[darkTheme ? pngSrcsetLgDark : pngSrcsetLg]" />
    <img :src="[darkTheme ? imgSrcDark : imgSrc]" alt="" width="1279" height="110" class="w-full" />
  </picture>
</template>

<script>
export default {
  data() {
    return {
      webpSrcsetSmDark: '/img/contact/waves-dark@sm.webp 1x, /img/contact/waves-dark@lg.webp 2x',
      webpSrcsetLgDark: '/img/contact/waves-dark@lg.webp',
      pngSrcsetSmDark: '/img/contact/waves-dark@sm.png 1x, /img/contact/waves-dark@lg.png 2x',
      pngSrcsetLgDark: '/img/contact/waves-dark@lg.png',
      imgSrcDark: '/img/contact/waves-dark@sm.png',
      webpSrcsetSm: '/img/contact/waves@sm.webp 1x, /img/contact/waves@lg.webp 2x',
      webpSrcsetLg: '/img/contact/waves@lg.webp',
      pngSrcsetSm: '/img/contact/waves@sm.png 1x, /img/contact/waves@lg.png 2x',
      pngSrcsetLg: '/img/contact/waves@lg.png',
      imgSrc: '/img/contact/waves@sm.png',
    };
  },
  props: {
    darkTheme: Boolean,
  },
};
</script>

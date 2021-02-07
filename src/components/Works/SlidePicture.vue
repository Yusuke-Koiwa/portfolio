<template>
  <picture>
    <source type="image/webp" media="(max-width: 500px)" :srcset="webpSrcsetSm" />
    <source type="image/webp" :srcset="webpSrcset" />
    <source type="image/png" media="(max-width: 500px)" :srcset="pngSrcsetSm" />
    <source type="image/png" :srcset="pngSrcset" />
    <img :src="imgSrc" alt="" width="1264" height="580" loading="lazy" class="mb-5" />
  </picture>
</template>

<script>
export default {
  props: {
    webpSrcset: String,
    webpSrcsetSm: String,
    pngSrcset: String,
    pngSrcsetSm: String,
    imgSrc: String,
  },
};
</script>

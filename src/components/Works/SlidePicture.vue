<template>
  <picture>
    <source type="image/webp" :srcset="webpSrcset" sizes="(max-width:767px) 100vw, 50vw" />
    <source type="image/png" :srcset="pngSrcset" sizes="(max-width:767px) 100vw, 50vw" />
    <img :src="imgSrc" alt="" width="1264" height="580" decoding="async" class="mb-5" />
  </picture>
</template>

<script>
export default {
  props: {
    webpSrcset: String,
    pngSrcset: String,
    imgSrc: String,
  },
};
</script>

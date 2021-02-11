<template>
  <div
    class="js-step service-item flex items-center p-8 bg-c-gray dark:text-white dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-90"
    :class="[isRight ? 'margin-left' : 'margin-right']"
  >
    <div
      class="service-item-inner mx-auto flex flex-col-reverse md:flex-row justify-between items-center"
      :class="[isRight ? 'md:flex-row-reverse' : '']"
    >
      <div class="service-text">
        <h3 class="mb-7 text-center" :class="[isRight ? 'md:text-right' : 'md:text-left']">
          <span class="mr-2 text-3xl sm:text-4xl font-semibold">0{{ number }}. </span>
          <span class="text-3.5xl sm:text-4.5xl font-semibold">{{ label }}</span>
        </h3>
        <p class="text-xl md:text-2xl leading-10"><slot /></p>
      </div>
      <div
        class="img-wrapper flex justify-center items-center mb-8 md:mb-0 rounded-full bg-white bg-opacity-90 dark:bg-opacity-70"
        :class="[isRight ? 'md:mr-8' : 'md:ml-8']"
      >
        <picture>
          <source type="image/webp" :srcset="webpSrcset" />
          <source type="image/png" :srcset="pngSrcset" />
          <img :src="imgUrl" alt="" width="200" height="200" class="img" :class="imgClass" decoding="async" />
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
import Container from '../Container.vue';
export default {
  components: { Container },
  props: {
    number: Number,
    label: String,
    webpSrcset: String,
    pngSrcset: String,
    imgUrl: String,
    imgClass: String,
    isRight: Boolean,
  },
};
</script>

<style scoped>
.service-item {
  min-height: 450px;
  transition: transform 0.75s ease-out;
}
.service-item.margin-right {
  transform: translateX(-100%);
}
.service-item.margin-left {
  transform: translateX(100%);
}
.service-item.active {
  transform: translateX(0);
}
.service-item-inner {
  max-width: 1000px;
  opacity: 0;
  transition: opacity 0.3s ease-out 0.75s;
}
.service-item.active .service-item-inner {
  opacity: 1;
}
.margin-right {
  margin-right: 7.5%;
}
.margin-left {
  margin-left: 7.5%;
}
.img-wrapper {
  width: 175px;
  height: 175px;
}
@media screen and (min-width: 768px) {
  .img-wrapper {
    width: 250px;
    height: 250px;
  }
}
.img {
  width: 100%;
  height: auto;
}
.img-lg {
  max-width: 200px;
}
.img-md {
  max-width: 125px;
}
@media screen and (min-width: 768px) {
  .img-md {
    max-width: 175px;
  }
}
.service-text {
  width: 100%;
}
@media screen and (min-width: 768px) {
  .service-text {
    width: calc(100% - 250px);
  }
}
</style>

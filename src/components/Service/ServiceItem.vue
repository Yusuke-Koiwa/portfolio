<template>
  <div
    class="service-item flex items-center p-8 bg-c-gray dark:text-white dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-90"
    :class="[isRight ? 'text-right margin-left' : 'margin-right']"
  >
    <div class="service-item-inner mx-auto flex justify-between items-center" :class="[isRight ? 'flex-row-reverse' : '']">
      <div class="service-text">
        <h3 class="mb-7">
          <span class="number mr-2 text-4xl font-semibold">0{{ number }}.</span>
          <span class="text-4.5xl font-semibold">{{ label }}</span>
        </h3>
        <p class="text-2xl text-left leading-10"><slot /></p>
      </div>
      <div
        class="img-wrapper flex justify-center items-center rounded-full bg-white bg-opacity-90 dark:bg-opacity-70"
        :class="[isRight ? 'mr-8' : 'ml-8']"
      >
        <img :src="imgUrl" alt="" :width="imgSize" :height="imgSize" />
      </div>
    </div>
  </div>
</template>

<script>
import Container from '../Container.vue';
export default {
  name: 'ServiceItem',
  components: { Container },
  props: {
    number: Number,
    label: String,
    imgUrl: String,
    imgSize: Number,
    isRight: Boolean,
  },
};
</script>

<style scoped>
.service-item {
  min-height: 400px;
}
.service-item-inner {
  max-width: 1000px;
}
.margin-right {
  margin-right: 7.5%;
}
.margin-left {
  margin-left: 7.5%;
}
.number {
  color: #2c1da0;
}
.img-wrapper {
  width: 250px;
  height: 250px;
}
.service-text {
  width: calc(100% - 250px);
}
</style>

<template>
  <div class="service-item flex items-center p-8 bg-c-gray dark:text-white dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-90" :class="customClass">
    <div class="service-item-inner mx-auto">
      <h3 class="mb-7">
        <span class="number mr-2 text-4xl font-semibold">0{{ number }}.</span>
        <span class="text-4.5xl font-semibold">{{ label }}</span>
      </h3>
      <p class="text-2xl text-left leading-10"><slot /></p>
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
    right: Boolean,
  },
  computed: {
    customClass: function () {
      if (this.right) {
        return 'text-right margin-left';
      } else {
        return 'margin-right';
      }
    },
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
</style>

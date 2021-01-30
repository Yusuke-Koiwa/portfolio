<template>
  <div class="btn-container absolute z-10 bottom-0 md:bottom-1/2 left-1/2 md:left-0">
    <button
      class="slider-btn w-18 h-18 mr-3.5 rounded-full text-3xl font-semibold bg-gray-300 dark:bg-dark-gray dark:text-white shadow dark:shadow-white focus:outline-none"
      @click="prevClick"
    >
      ＜
    </button>
    <button
      class="slider-btn w-18 h-18 rounded-full text-3xl font-semibold bg-gray-300 dark:bg-dark-gray dark:text-white shadow dark:shadow-white focus:outline-none"
      @click="nextClick"
    >
      ＞
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    prevClick() {
      this.$emit('prevClick');
    },
    nextClick() {
      this.$emit('nextClick');
    },
  },
};
</script>

<style scoped>
.btn-container {
  transform: translate(-50%, 175%);
}
@media screen and (min-width: 768px) {
  .btn-container {
    transform: translate(-50%, 75%);
  }
}
.slider-btn:active {
  transform: translateY(1px);
  box-shadow: none;
}
</style>

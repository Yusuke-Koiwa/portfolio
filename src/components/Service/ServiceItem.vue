<template>
  <div class="w-3/4 mb-48 px-4 py-8 bg-white dark:text-white dark:bg-black bg-opacity-80 dark:bg-opacity-80" :class="align">
    <h3 class="mb-7">
      <span class="number mr-2 text-4xl font-semibold">0{{ number }}.</span>
      <span class="text-4.5xl font-semibold">{{ label }}</span>
    </h3>
    <p class="text-2xl text-left"><slot /></p>
  </div>
</template>

<script>
export default {
  name: 'ServiceItem',
  props: {
    number: Number,
    label: String,
    right: Boolean,
  },
  computed: {
    align: function () {
      if (this.right) {
        return 'ml-auto text-right';
      }
    },
  },
};
</script>

<style scoped>
.number {
  color: #2c1da0;
}
</style>

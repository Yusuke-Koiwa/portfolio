<template>
  <div class="heading mx-auto text-center dark:text-white bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
    <h2 class="font-heading text-4xl">{{ title }}</h2>
    <div class="relative w-full">
      <div class="heading-line bg-black dark:bg-white my-1.5"></div>
      <div
        class="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-black dark:border-white"
      ></div>
    </div>
    <p class="text-xl font-semibold">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle'],
};
</script>

<style scoped>
.heading {
  width: 210px;
}
.heading-line {
  height: 3px;
}
</style>

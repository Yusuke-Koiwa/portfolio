<template>
  <div class="heading mx-auto text-center">
    <h2 class="font-heading text-4xl">{{ title }}</h2>
    <div class="relative w-full">
      <div class="heading-line bg-black my-1.5"></div>
      <div
        class="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-black"
      ></div>
    </div>
    <p class="text-xl font-semibold">{{ subtitle }}</p>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: ['title', 'subtitle'],
};
</script>

<style scoped>
.heading {
  width: 170px;
}
.heading-line {
  height: 3px;
}
</style>

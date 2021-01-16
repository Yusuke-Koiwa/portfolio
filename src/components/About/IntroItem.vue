<template>
  <div class="mb-10">
    <div class="relative inline-block">
      <p class="mb-1">{{ text }}</p>
      <div class="line w-full bg-black dark:bg-white"></div>
      <div class="rotate-line absolute bottom-0 right-0 h-4 transform bg-black dark:bg-white"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntorItem',
  props: ['text'],
};
</script>

<style scoped>
.intro-item {
  border-bottom: 3px solid;
}
.line {
  height: 3px;
}
.rotate-line {
  width: 3px;
  transform: translate(-5px, 12px) rotate(45deg);
}
</style>

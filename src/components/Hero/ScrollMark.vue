<template>
  <div>
    <div class="relative h-24 -mb-16 animate-bounce">
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-black"></div>
      <div class="tip absolute bottom-0 left-1/2 w-5 h-5 border-b-4 border-black"></div>
    </div>
    <div class="w-16 h-24 rounded-full border-2 border-black"></div>
  </div>
</template>
<script>
export default {
  name: 'ScrollMark',
};
</script>

<style scoped>
.tip {
  transform: translate(-52.5%, -3px) rotate(45deg);
}
</style>

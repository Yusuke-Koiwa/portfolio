<template>
  <div class="relative animate-pulse animate-bounce">
    <div class="w-16 h-16 rounded-full border-2 border-black"></div>
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-black"></div>
    <div
      class="absolute bottom-8 left-1/2 transform -translate-x-1/2 rotate-45 w-5 h-5 border-b-4 border-black"
    ></div>
  </div>
</template>
<script>
export default {
  name: 'ScrollMark',
};
</script>

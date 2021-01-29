<template>
  <div>
    <div class="relative h-24 -mb-16 animate-bounce">
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-24 bg-black dark:bg-white"></div>
      <div class="tip absolute bottom-0 left-1/2 w-5 h-1 bg-black dark:bg-white"></div>
    </div>
    <div class="w-16 h-24 rounded-full border-2 border-black dark:border-white"></div>
  </div>
</template>

<style scoped>
.tip {
  transform: translate(-1rem, -0.3rem) rotate(45deg);
}
</style>

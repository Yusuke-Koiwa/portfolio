<template>
  <transition name="fade" appear>
    <img v-show="darkTheme" src="/static/img/hero/hero-wave-black.png" alt="" class="absolute bottom-0 -right-0.5 w-full h-full" />
  </transition>
  <transition name="fade" appear>
    <img v-show="!darkTheme" src="/static/img/hero/hero-wave-white.png" alt="" class="absolute bottom-0 -right-0.5 w-full h-full" />
  </transition>
</template>

<script>
export default {
  props: {
    darkTheme: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s;
}
</style>

<template>
  <img v-show="darkTheme" src="/static/img/hero/hero-wave-black.png" alt="" class="absolute bottom-0 -right-0.5 w-full h-full" />
  <img v-show="!darkTheme" src="/static/img/hero/hero-wave-white.png" alt="" class="absolute bottom-0 -right-0.5 w-full h-full" />
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

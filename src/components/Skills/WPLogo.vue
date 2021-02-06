<template>
  <img v-show="!darkTheme" src="/img/skills/wordpress@2x.png" width="80" height="80" alt="" loading="lazy" class="w-20 h-auto mx-auto mb-10" />
  <img v-show="darkTheme" src="/img/skills/wordpress-white@2x.png" width="80" height="80" alt="" loading="lazy" class="w-20 h-auto mx-auto mb-10" />
</template>

<script>
export default {
  props: {
    darkTheme: Boolean,
  },
};
</script>

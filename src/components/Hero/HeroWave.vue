<template>
  <img :src="imgUrl" alt="" class="absolute bottom-0 -right-0.5 w-full h-full" />
</template>

<script>
export default {
  data() {
    return {
      imgUrl: null,
    };
  },
  props: {
    darkTheme: {
      type: Boolean,
    },
  },
  watch: {
    darkTheme: function (dark) {
      if (dark) {
        this.imgUrl = '/static/img/hero/hero-wave-black.png';
      } else {
        this.imgUrl = '/static/img/hero/hero-wave-white.png';
      }
    },
  },
};
</script>

<template>
  <div>
    <img :src="imgUrl" width="65" height="65" loading="lazy" alt="" class="transform rotate-90 mx-auto" />
  </div>
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
        this.imgUrl = '/static/img/rocket-white.svg';
      } else {
        this.imgUrl = '/static/img/rocket-black.svg';
      }
    },
  },
};
</script>

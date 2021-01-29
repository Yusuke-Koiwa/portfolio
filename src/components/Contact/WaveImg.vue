<template>
  <img :src="imgUrl" alt="" width="1279" height="110" class="w-full" />
</template>

<script>
export default {
  data() {
    return {
      imgUrl: null,
    };
  },
  props: {
    darkTheme: Boolean,
  },
  watch: {
    darkTheme: function (dark) {
      if (dark) {
        this.imgUrl = '/static/img/contact-waves-dark.png';
      } else {
        this.imgUrl = '/static/img/contact-waves-normal.png';
      }
    },
  },
};
</script>

<template>
  <a
    href="https://github.com/Yusuke-Koiwa"
    target="_blank"
    rel="noopener noreferrer"
    class="button block w-60 h-14 border border-black shadow dark:border-white"
  >
    <div class="w-full h-full flex justify-center items-center">
      <img :src="imgUrl" width="45" height="45" alt="GitHubロゴ" class="mr-3" loading="lazy" />
      <p class="text-2xl mr-3">GitHub</p>
      <div class="relative w-11 h-7 flex items-center pt-2">
        <div class="w-full h-0.5 bg-black dark:bg-white"></div>
        <div
          class="absolute top-1/2 right-0 w-7 h-7 rounded-full transform translate-x-1/2 -translate-y-1/2 border border-black dark:border-white"
        ></div>
        <div class="absolute tip right-0 w-0.5 h-3 bg-black dark:bg-white"></div>
      </div>
    </div>
  </a>
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
        this.imgUrl = '/static/img/about/github-white.png';
      } else {
        this.imgUrl = '/static/img/about/github-black.png';
      }
    },
  },
};
</script>

<style scoped>
.tip {
  transform: translate(-4px, -4px) rotate(-45deg);
}
.button:focus {
  transform: translateY(1px);
  box-shadow: none;
}
</style>

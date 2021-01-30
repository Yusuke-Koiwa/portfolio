<template>
  <a
    href="https://github.com/Yusuke-Koiwa"
    target="_blank"
    rel="noopener noreferrer"
    class="button block w-full mx-auto sm:mx-0 p-2 bg-white dark:bg-black border border-black shadow dark:border-white dark:shadow-white"
  >
    <div class="w-full h-full flex justify-center items-center">
      <img v-show="darkTheme" src="/static/img/about/github-white.png" width="45" height="45" alt="GitHubロゴ" class="mr-3" loading="lazy" />
      <img v-show="!darkTheme" src="/static/img/about/github-black.png" width="45" height="45" alt="GitHubロゴ" class="mr-3" loading="lazy" />
      <p class="text-2xl mr-3">GitHub</p>
      <div class="relative w-11 h-7 flex items-center pt-2">
        <div class="line w-full bg-black dark:bg-white"></div>
        <div
          class="absolute top-1/2 right-0 w-7 h-7 rounded-full transform translate-x-1/2 -translate-y-1/2 border border-black dark:border-white"
        ></div>
        <div class="absolute tip right-0 w-3 bg-black dark:bg-white"></div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    darkTheme: Boolean,
  },
};
</script>

<style scoped>
.line {
  height: 2px;
}
.tip {
  height: 2px;
  transform: translate(0.1rem, -0.25rem) rotate(45deg);
}
.button {
  max-width: 240px;
}
.button:focus {
  transform: translateY(1px);
  box-shadow: none;
}
</style>

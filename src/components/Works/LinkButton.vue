<template>
  <a
    :href="url"
    class="button inline-block mb-1 mx-auto px-6 py-4 flex justify-center items-center shadow bg-white dark:bg-black dark:shadow-white"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="mr-2 text-xl font-semibold dark:text-white">MORE</div>
    <div class="arrow relative pt-1">
      <div class="line w-9 bg-black dark:bg-white"></div>
      <div class="tip w-3 absolute right-0 top-0 bg-black dark:bg-white"></div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    url: String,
  },
};
</script>

<style scoped>
.button:active {
  transform: translateY(1px);
  box-shadow: none;
}
.line {
  height: 2px;
}
.tip {
  height: 2px;
  transform: translate(0.08rem, 0) rotate(45deg);
}
</style>

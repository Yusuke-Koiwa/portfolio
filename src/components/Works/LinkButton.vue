<template>
  <a :href="url" class="button block mb-1 mx-auto flex justify-center items-center shadow-md bg-white dark:bg-black">
    <div class="mr-2 text-xl font-semibold dark:text-white">MORE</div>
    <div class="arrow relative pt-1">
      <div class="line bg-black dark:bg-white"></div>
      <div class="tip absolute right-0 top-0 bg-black dark:bg-white"></div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    url: String,
  },
};
</script>

<style scoped>
.button {
  width: 160px;
  height: 60px;
}
.line {
  width: 38px;
  height: 3px;
}
.tip {
  width: 3px;
  height: 15px;
  transform: translate(-5px, -7.5px) rotate(-45deg);
}
</style>

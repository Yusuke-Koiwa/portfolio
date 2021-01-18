<template>
  <a :href="url" class="button mx-auto flex justify-center items-center shadow-md bg-white dark:bg-black dark-text-white">
    <div class="text-xl font-semibold">MORE</div>
    <div></div>
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
</style>

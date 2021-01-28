<template>
  <div class="p-4 bg-white dark:bg-black dark:text-white bg-opacity-70 dark:bg-opacity-70">
    <IntroItem text="小岩 裕介" class="text-3xl" />
    <IntroItem text="フロントエンドエンジニア" class="text-2xl" />
    <p class="text-lg mb-10">
      ここに自己紹介を記入。ここに自己紹介を記入。ここに自己紹介を記入。ここに自己紹介を記入。ここに自己紹介を記入。ここに自己紹介を記入。ここに自己紹介を記入。ここに自己紹介を記入。ここに自己紹介を記入。ここに自己紹介を記入。ここに自己紹介を記入。
    </p>
    <GithubLink :darkTheme="darkTheme" />
  </div>
</template>

<script>
import IntroItem from './IntroItem.vue';
import GithubLink from './GithubLink.vue';
export default {
  components: { IntroItem, GithubLink },
  props: {
    darkTheme: {
      type: Boolean,
    },
  },
};
</script>

<style scoped></style>

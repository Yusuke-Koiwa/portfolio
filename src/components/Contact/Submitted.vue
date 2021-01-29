<template functional>
  <div class="submitted-message w-full overflow-hidden pt-8 px-6 text-center bg-c-gray dark:bg-dark-gray">
    <div class="inline-block mx-auto p-4 px-6 border-2 border-green-500 text-lg leading-8 dark:text-white">
      <p>フォームの送信が完了しました。</p>
      <p>内容を確認後、追って返信致しますのでお待ちください。</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    submitted: Boolean,
  },
};
</script>

<style scoped>
.submitted-message {
  transition: height 0.5s ease-in;
}
</style>

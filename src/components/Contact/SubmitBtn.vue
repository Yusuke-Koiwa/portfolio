<template>
  <input
    type="submit"
    value="送信"
    :disabled="submitted"
    class="form-submit block mx-auto cursor-pointer text-2xl font-semibold shadow text-black focus:outline-none bg-white dark:bg-gray-200 dark:shadow-white disabled:opacity-50 disabled:cursor-default"
  />
</template>

<script>
export default {
  props: {
    submitted: Boolean,
  },
};
</script>

<style scoped>
.form-submit {
  width: 153px;
  height: 62px;
}
.form-submit:active {
  transform: translateY(1px);
  box-shadow: none;
}
</style>

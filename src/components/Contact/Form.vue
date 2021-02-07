<template>
  <form
    action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdEDKkfhROXtv4UGnnr3IYG3cjEKuELbRKP1cw-cdf9eTBa2w/formResponse"
    method="post"
    target="submitted"
    @submit="success"
    class="form pt-24 px-7 pb-4 bg-c-gray dark:bg-dark-gray dark:text-white"
  >
    <div class="container mx-auto">
      <p class="form-description w-full mx-auto mb-16 text-2xl leading-10">
        お仕事のご依頼、お問い合わせなどはこちらのフォームよりお気軽にお問い合わせください。内容を確認の上、ご返事いたします。
      </p>
      <div class="flex flex-col md:flex-row justify-center md:items-center mb-16">
        <label for="form-name" class="field-label mr-5 mb-2 md:mb-0 flex md:justify-center items-center">
          <span class="text-2xl font-semibold">お名前</span>
          <span class="ml-2 mb-1 px-1 py-0.5 rounded text-white text-base md:text-sm font-semibold bg-red-400">必須</span>
        </label>
        <input
          type="text"
          name="entry.1038968356"
          id="form-name"
          class="input-text text-1.5xl md:text-xl px-7 text-black dark:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="お名前を入力してください。"
          required
        />
      </div>
      <div class="flex flex-col md:flex-row justify-center md:items-center mb-16">
        <label for="form-email" class="field-label mr-5 mb-2 md:mb-0 flex md:justify-center items-center">
          <span class="text-2xl font-semibold">メールアドレス</span>
          <span class="ml-2 mb-1 px-1 py-0.5 rounded text-white text-base md:text-sm font-semibold bg-red-400">必須</span>
        </label>
        <input
          type="email"
          name="entry.1056754541"
          id="form-email"
          class="input-text text-xl px-7 text-black dark:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="メールアドレスを入力してください。"
          required
        />
      </div>
      <div class="flex flex-col md:flex-row justify-center md:items-center mb-16">
        <label for="form-tel" class="field-label mr-5 mb-2 md:mb-0 flex md:justify-center items-center">
          <span class="text-2xl font-semibold">電話番号</span>
          <span class="ml-2 mb-1 px-1 py-0.5 rounded text-white text-base md:text-sm font-semibold bg-gray-400">任意</span>
        </label>
        <input
          type="tel"
          name="entry.1482978806"
          id="form-tel"
          class="input-text text-xl px-7 text-black dark:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="電話番号を入力してください。"
        />
      </div>
      <div class="flex flex-col md:flex-row justify-center md:items-center mb-16">
        <label for="form-body" class="field-label mr-5 mb-2 md:mb-0 flex md:justify-center items-center">
          <span class="text-2xl font-semibold">お問い合せ内容</span>
          <span class="ml-2 mb-1 px-1 py-0.5 rounded text-white text-base md:text-sm font-semibold bg-red-400">必須</span>
        </label>
        <textarea
          name="entry.2102755233"
          id="form-body"
          class="input-textarea text-xl p-7 text-black dark:bg-gray-200 focus:outline-none focus:ring focus:border-blue-300"
          placeholder="お問い合わせ内容を入力してください。"
          required
        />
      </div>
      <SubmitBtn :submitted="submitted" />
    </div>
  </form>
</template>

<script>
import Container from '../Container.vue';
import SubmitBtn from './SubmitBtn.vue';
export default {
  components: { Container, SubmitBtn },
  props: {
    submitted: Boolean,
  },
  methods: {
    success: function () {
      this.$emit('success');
    },
  },
};
</script>

<style scoped>
.form {
  margin-top: -0.1px;
}
.form-description {
  max-width: 520px;
}
.field-label {
  width: 215px;
}
.input-text,
.input-textarea {
  width: 100%;
  max-width: 855px;
}
@media screen and (min-width: 767px) {
  .input-text,
  .input-textarea {
    width: calc(100% - 251px);
  }
}
.input-text {
  height: 80px;
}
.input-textarea {
  height: 270px;
  resize: none;
}
</style>

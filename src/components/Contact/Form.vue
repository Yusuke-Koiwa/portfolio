<template>
  <form
    action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdEDKkfhROXtv4UGnnr3IYG3cjEKuELbRKP1cw-cdf9eTBa2w/formResponse"
    method="post"
    target="submitted"
    @submit="success"
    class="form pt-24 pb-4 bg-c-gray dark:bg-dark-gray dark:text-white"
  >
    <Container>
      <p class="form-description w-full mx-auto mb-16 text-2xl leading-10">
        お仕事のご依頼、お問い合わせなどはこちらのフォームよりお気軽にお問い合わせください。内容を確認の上、ご返事いたします。
      </p>
      <div class="flex justify-center items-center mb-16">
        <p class="field-label mr-5 flex justify-center items-center">
          <span class="text-2xl text-center font-semibold">お名前</span>
          <span class="ml-2 mb-1 px-1 py-0.5 rounded text-white text-sm font-semibold bg-red-400">必須</span>
        </p>
        <input
          type="text"
          name="entry.1038968356"
          class="input-text text-xl px-7 text-black focus:outline-none focus:ring focus:border-blue-300"
          placeholder="お名前を入力してください。"
          required
        />
      </div>
      <div class="flex justify-center items-center mb-16">
        <p class="field-label mr-5 flex justify-center items-center">
          <span class="text-2xl text-center font-semibold">メールアドレス</span>
          <span class="ml-2 mb-1 px-1 py-0.5 rounded text-white text-sm font-semibold bg-red-400">必須</span>
        </p>
        <input
          type="email"
          name="entry.1056754541"
          class="input-text text-xl px-7 text-black focus:outline-none focus:ring focus:border-blue-300"
          placeholder="メールアドレスを入力してください。"
          required
        />
      </div>
      <div class="flex justify-center items-center mb-16">
        <p class="field-label mr-5 flex justify-center items-center">
          <span class="text-2xl text-center font-semibold">電話番号</span>
          <span class="ml-2 mb-1 px-1 py-0.5 rounded text-white text-sm font-semibold bg-gray-400">任意</span>
        </p>
        <input
          type="tel"
          name="entry.1482978806"
          class="input-text text-xl px-7 text-black focus:outline-none focus:ring focus:border-blue-300"
          placeholder="電話番号を入力してください。"
        />
      </div>
      <div class="flex justify-center items-center mb-16">
        <p class="field-label mr-5 flex justify-center items-center">
          <span class="text-2xl text-center font-semibold">お問い合せ内容</span>
          <span class="ml-2 mb-1 px-1 py-0.5 rounded text-white text-sm font-semibold bg-red-400">必須</span>
        </p>
        <textarea
          name="entry.2102755233"
          class="input-textarea text-xl p-7 text-black focus:outline-none focus:ring focus:border-blue-300"
          placeholder="お問い合わせ内容を入力してください。"
          required
        />
      </div>
      <SubmitBtn :submitted="submitted" />
    </Container>
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
.input-text {
  width: calc(100% - 251px);
  max-width: 855px;
  height: 83px;
}
.input-textarea {
  width: calc(100% - 251px);
  max-width: 855px;
  height: 273px;
  resize: none;
}
</style>

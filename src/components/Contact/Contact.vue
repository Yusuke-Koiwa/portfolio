<template>
  <section id="contact" class="pt-24">
    <Heading title="Contact" subtitle="お問い合わせ" class="mb-7" />
    <img src="/static/img/contact-waves-normal.png" alt="" width="1279" height="110" class="w-full" />
    <form action="" class="form pt-24 pb-20 bg-c-gray">
      <Container>
        <p class="form-description w-full mx-auto mb-16 text-2xl leading-10">
          お仕事のご依頼、お問い合わせなどはこちらのフォームよりお気軽にお問い合わせください。内容を確認の上、ご返事いたします。
        </p>
        <div class="flex justify-center items-center mb-16">
          <p class="field-label mr-5 flex items-center">
            <span class="text-2xl text-center">お名前</span>
            <span class="ml-2 mb-1 p-1 rounded text-white text-sm font-semibold bg-red-400">必須</span>
          </p>
          <input type="text" name="" class="input-text text-xl px-7" placeholder="お名前を入力してください。" required />
        </div>
        <div class="flex justify-center items-center mb-16">
          <p class="field-label mr-5 flex items-center">
            <span class="text-2xl text-center">メールアドレス</span>
            <span class="ml-2 mb-1 p-1 rounded text-white text-sm font-semibold bg-red-400">必須</span>
          </p>
          <input type="email" name="" class="input-text text-xl px-7" placeholder="メールアドレスを入力してください。" required />
        </div>
        <div class="flex justify-center items-center mb-16">
          <p class="field-label mr-5 flex items-center">
            <span class="text-2xl text-center">電話番号</span>
            <span class="ml-2 mb-1 p-1 rounded text-white text-sm font-semibold bg-gray-400">任意</span>
          </p>
          <input type="tel" name="" class="input-text text-xl px-7" placeholder="電話番号を入力してください。" />
        </div>
        <div class="flex justify-center items-center mb-16">
          <p class="field-label mr-5 flex items-center">
            <span class="text-2xl text-center">お問い合せ内容</span>
            <span class="ml-2 mb-1 p-1 rounded text-white text-sm font-semibold bg-red-400">必須</span>
          </p>
          <textarea name="" class="input-textarea text-xl p-7" placeholder="お問い合わせ内容を入力してください。" required />
        </div>
        <input type="submit" value="送信" class="form-submit block mx-auto cursor-pointer text-2xl font-semibold shadow bg-white" />
      </Container>
    </form>
  </section>
</template>

<script>
import Container from '../Container.vue';
import Heading from '../Heading.vue';
export default {
  name: 'Contact',
  components: { Heading, Container },
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
  height: 193px;
  resize: none;
}
.form-submit {
  width: 153px;
  height: 62px;
}
</style>

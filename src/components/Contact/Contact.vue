<template>
  <section id="contact" class="pt-24">
    <Heading title="Contact" subtitle="お問い合わせ" class="mb-7" />
    <WaveImg :darkTheme="darkTheme" />
    <Form :submitted="submitted" @success="toggleSubmit" />
    <transition name="fade" @before-enter="beforeEnter" @enter="enter" appear>
      <Submitted v-if="submitted" :submitted="submitted" />
    </transition>
    <iframe name="submitted" id="submitted" class="hidden"></iframe>
  </section>
</template>

<script>
import Container from '../Container.vue';
import Heading from '../Heading.vue';
import WaveImg from './WaveImg.vue';
import Form from './Form.vue';
import Submitted from './Submitted.vue';
export default {
  name: 'Contact',
  components: { Heading, Form, WaveImg, Container, Submitted },
  props: {
    darkTheme: Boolean,
  },
  data() {
    return {
      submitted: false,
    };
  },
  methods: {
    beforeEnter: function (el) {
      el.style.height = '0';
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + 'px';
    },
    toggleSubmit: function () {
      this.submitted = true;
    },
  },
};
</script>

<style scoped></style>

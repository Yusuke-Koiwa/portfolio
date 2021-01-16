<template>
  <section id="about">
    <Container>
      <div class="w-full h-20 flex justify-end items-center">
        <Dark-switch @toggleTheme="toggleTheme" :darkTheme="darkTheme" />
      </div>

      <Heading title="ABOUT" subtitle="自己紹介" class="my-4" />

      <img :src="imgUrl" width="65" height="65" alt="" class="transform rotate-90 mx-auto" />

      <Intro :darkTheme="darkTheme" class="w-1/2 my-8" />
    </Container>
  </section>
</template>

<script>
import Container from '../Container.vue';
import DarkSwitch from './DarkSwitch.vue';
import Heading from './Heading.vue';
import Intro from './Intro.vue';
export default {
  name: 'About',
  components: { Container, DarkSwitch, Heading, Intro },
  methods: {
    toggleTheme(dark) {
      this.$emit('toggleTheme', dark);
    },
  },
  data() {
    return {
      imgUrl: null,
    };
  },
  props: {
    darkTheme: {
      type: Boolean,
    },
  },
  watch: {
    darkTheme: function (dark) {
      if (dark) {
        this.imgUrl = '/static/img/rocket-white.svg';
      } else {
        this.imgUrl = '/static/img/rocket-black.svg';
      }
    },
  },
};
</script>

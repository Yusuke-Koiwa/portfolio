<template>
  <section id="about" class="pt-14 pb-40">
    <Container>
      <div class="w-full h-20 flex justify-end items-center">
        <Dark-switch @toggleTheme="toggleTheme" :darkTheme="darkTheme" />
      </div>
      <Heading title="ABOUT" subtitle="自己紹介" class="my-4" />
      <Rocket :darkTheme="darkTheme" />
      <div class="flex">
        <Intro :darkTheme="darkTheme" class="w-1/2" />
        <Planets class="w-1/2" />
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '../Container.vue';
import DarkSwitch from './DarkSwitch.vue';
import Heading from '../Heading.vue';
import Intro from './Intro.vue';
import Rocket from './Rocket.vue';
import Planets from './Planets.vue';
export default {
  components: { Container, DarkSwitch, Heading, Intro, Rocket, Planets },
  methods: {
    toggleTheme(dark) {
      this.$emit('toggleTheme', dark);
    },
  },
  props: {
    darkTheme: {
      type: Boolean,
    },
  },
};
</script>

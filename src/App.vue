<template>
  <div class="overflow-hidden">
    <Header />
    <Hero />
    <About />
  </div>
</template>

<script>
import Hero from './components/Hero/Hero.vue';
import Header from './components/Header/Header.vue';
import About from './components/About/About.vue';

export default {
  name: 'App',
  components: {
    Hero,
    Header,
    About,
  },
};
</script>

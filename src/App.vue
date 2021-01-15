<template>
  <Header></Header>
  <Hero></Hero>
</template>

<script>
import Hero from './components/Hero/Hero.vue';
import Header from './components/Header/Header.vue';

export default {
  name: 'App',
  components: {
    Hero,
    Header,
  },
};
</script>

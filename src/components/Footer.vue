<template>
  <footer class="px-6 pt-20 pb-3 text-xl text-center bg-c-gray dark:bg-dark-gray dark:text-white">
    <Container class="relative">
      <p>©︎ 2021 Koiwa’s Portfolio</p>
      <ScrollTop :darkTheme="darkTheme" />
    </Container>
  </footer>
</template>

<script>
import Container from './Container.vue';
import ScrollTop from './ScrollTop.vue';
export default {
  components: { ScrollTop, Container },
  props: {
    darkTheme: Boolean,
  },
};
</script>

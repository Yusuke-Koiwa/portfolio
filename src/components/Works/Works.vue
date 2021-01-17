<template>
  <section id="works" class="pt-24 pb-40">
    <Container>
      <Heading title="WORKS" subtitle="作品" class="mb-16" />
    </Container>
    <Slider />
  </section>
</template>
<script>
import Container from '../Container.vue';
import Heading from '../Heading.vue';
import Slider from './Slider.vue';
export default {
  name: 'Works',
  components: { Container, Heading, Slider },
};
</script>
<style></style>

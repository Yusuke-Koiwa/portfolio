<template>
  <section>
    <Container>
      <div class="w-full h-20 flex justify-end items-center">
        <dark-switch />
      </div>
    </Container>
  </section>
</template>

<script>
import Container from '../Container.vue';
import DarkSwitch from './DarkSwitch.vue';
export default {
  name: 'About',
  components: { Container, DarkSwitch },
};
</script>
<style scoped></style>

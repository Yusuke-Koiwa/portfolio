<template>
  <section class="hero relative w-full h-screen px-6 bg-cover bg-no-repeat bg-center">
    <img
      src="/static/img/hero/hero-wave-white.png"
      alt=""
      class="absolute bottom-0 -right-0.5 w-full h-full"
    />
    <p
      class="absolute catch-copy top-1/2 right-1/2 transform translate-x-3/4 -translate-y-1/2 font-heading text-7xl text-center z-10 whitespace-nowrap"
    >
      Expand the Possibilities
    </p>
    <img
      src="/static/img/hero/rocket@2x.png"
      alt=""
      class="rocket absolute bottom-0 left-0 h-auto"
    />
    <scroll-mark />
  </section>
</template>

<script>
import ScrollMark from './ScrollMark.vue';
export default {
  name: 'Hero',
  components: { ScrollMark },
};
</script>

<style scoped>
.hero {
  background-image: url('/static/img/hero/hero-bg@2x.jpg');
}

.catch-copy {
  text-shadow: 1px 0 10px #fff;
}

.rocket {
  width: 600px;
  /* animation: hovering 2s ease-in-out infinite alternate; */
}
@keyframes hovering {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(20px);
  }
}
</style>

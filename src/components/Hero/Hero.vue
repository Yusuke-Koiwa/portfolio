<template>
  <section id="top" class="hero relative w-full h-screen px-6 bg-cover bg-no-repeat bg-center">
    <HeroWave :darkTheme="darkTheme" />
    <div class="absolute top-0 right-0 bottom-0 left-0 flex items-center z-10">
      <div class="w-full mx-auto px-6" style="max-width: 1560px">
        <p class="catch-copy font-heading text-6xl sm:text-7xl 2xl:text-7.5xl 2xl:whitespace-nowrap text-right dark:text-white">
          Expand the Possibilities
        </p>
      </div>
    </div>

    <img src="/static/img/hero/rocket@2x.png" alt="" class="rocket absolute left-0 -ml-16 h-auto" width="600" height="520" />

    <div class="absolute bottom-0 left-1/2 mb-4 transform -translate-x-1/2">
      <ScrollMark />
    </div>
  </section>
</template>

<script>
import HeroWave from './HeroWave.vue';
import ScrollMark from './ScrollMark.vue';
export default {
  components: { HeroWave, ScrollMark },
  props: {
    darkTheme: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.hero {
  background-image: url('/static/img/hero/hero-bg@2x.jpg');
}
.catch-copy {
  padding-top: 100px;
  text-shadow: 1px 0 10px #fff;
  line-height: 1.25;
}
.rocket {
  top: 20%;
  width: 90%;
  max-width: 600px;
  /* animation: hovering 2.5s ease-in-out infinite alternate; */
}
@keyframes hovering {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-5px, 20px);
  }
}
</style>

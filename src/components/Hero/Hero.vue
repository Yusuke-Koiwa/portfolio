<template>
  <section id="top" class="hero relative w-full h-screen px-6 bg-fixed bg-contain bg-repeat bg-center">
    <HeroWave :darkTheme="darkTheme" />
    <div class="absolute top-0 right-0 bottom-0 left-0 flex items-center z-10">
      <div class="w-full mx-auto px-6" style="max-width: 1560px">
        <p class="catch-copy font-heading text-6xl sm:text-7xl 2xl:text-7.5xl 2xl:whitespace-nowrap text-right dark:text-white">
          Expand the Possibilities
        </p>
      </div>
    </div>

    <img src="/img/hero/rocket@2x.png" alt="" class="rocket absolute left-0 -ml-16 h-auto" width="600" height="520" />

    <div class="absolute bottom-0 left-1/2 mb-4 transform -translate-x-1/2">
      <ScrollMark class="scroll-mark" />
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
  background-image: url('/img/hero/bg/2xl.jpg');
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .hero {
    background-image: url('/img/hero/bg/2xl@2x.jpg');
  }
}
@media screen and (max-width: 1280px) {
  .hero {
    background-image: url('/img/hero/bg/xl.jpg');
  }
}
@media (-webkit-min-device-pixel-ratio: 2) and (max-width: 1280px), (min-resolution: 192dpi) and (max-width: 1280px) {
  .hero {
    background-image: url('/img/hero/bg/xl@2x.jpg');
  }
}
@media screen and (max-width: 960px) {
  .hero {
    background-image: url('/img/hero/bg/lg.jpg');
  }
}
@media (-webkit-min-device-pixel-ratio: 2) and (max-width: 960px), (min-resolution: 192dpi) and (max-width: 960px) {
  .hero {
    background-image: url('/img/hero/bg/lg@2x.jpg');
  }
}
@media screen and (max-width: 768px) {
  .hero {
    background-image: url('/img/hero/bg/md.jpg');
  }
}
@media (-webkit-min-device-pixel-ratio: 2) and (max-width: 768px), (min-resolution: 192dpi) and (max-width: 768px) {
  .hero {
    background-image: url('/img/hero/bg/md@2x.jpg');
  }
}
@media screen and (max-width: 560px) {
  .hero {
    background-image: url('/img/hero/bg/sm.jpg');
  }
}
@media (-webkit-min-device-pixel-ratio: 2) and (max-width: 560px), (min-resolution: 192dpi) and (max-width: 560px) {
  .hero {
    background-image: url('/img/hero/bg/sm@2x.jpg');
  }
}
.catch-copy {
  padding-top: 100px;
  text-shadow: 1px 0 10px #fff;
  line-height: 1.25;
  opacity: 0;
  transform: translateY(25%);
  animation: slide 0.5s ease-in forwards;
}
.rocket {
  top: 20%;
  width: 90%;
  max-width: 600px;
  opacity: 0;
  transform: translate(-10%, 25%);
  animation: slide 0.5s ease-in 0.75s forwards;
}
.scroll-mark {
  opacity: 0;
  transform: translateY(-25%);
  animation: slide 0.5s ease-in 1.5s forwards;
}
@keyframes slide {
  100% {
    transform: none;
    opacity: 1;
  }
}
</style>

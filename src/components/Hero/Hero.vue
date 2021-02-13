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

    <HeroRocket class="rocket absolute left-0 -ml-16 h-auto" />

    <div class="absolute bottom-0 left-1/2 mb-4 transform -translate-x-1/2">
      <ScrollMark class="scroll-mark" />
    </div>
  </section>
</template>

<script>
import HeroRocket from './HeroRocket.vue';
import HeroWave from './HeroWave.vue';
import ScrollMark from './ScrollMark.vue';
export default {
  components: { HeroWave, ScrollMark, HeroRocket },
  props: {
    darkTheme: {
      type: Boolean,
    },
  },
};
</script>

<style>
.webp .hero {
  background-image: url('/img/hero/bg/1920w.webp');
}
.hero {
  background-image: url('/img/hero/bg/1920w.jpg');
}
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .webp .hero {
    background-image: url('/img/hero/bg/3840w.webp');
  }
  .hero {
    background-image: url('/img/hero/bg/3840w.jpg');
  }
}
@media screen and (max-width: 1536px) {
  .webp .hero {
    background-image: url('/img/hero/bg/1536w.webp');
  }
  .hero {
    background-image: url('/img/hero/bg/1536w.jpg');
  }
}
@media (-webkit-min-device-pixel-ratio: 2) and (max-width: 1536px), (min-resolution: 192dpi) and (max-width: 1536px) {
  .webp .hero {
    background-image: url('/img/hero/bg/3072w.webp');
  }
  .hero {
    background-image: url('/img/hero/bg/3072w.jpg');
  }
}
@media screen and (max-width: 960px) {
  .webp .hero {
    background-image: url('/img/hero/bg/960w.webp');
  }
  .hero {
    background-image: url('/img/hero/bg/960w.jpg');
  }
}
@media (-webkit-min-device-pixel-ratio: 2) and (max-width: 960px), (min-resolution: 192dpi) and (max-width: 960px) {
  .webp .hero {
    background-image: url('/img/hero/bg/1920w.webp');
  }
  .hero {
    background-image: url('/img/hero/bg/1920w.jpg');
  }
}
@media screen and (max-width: 768px) {
  .webp .hero {
    background-image: url('/img/hero/bg/768w.webp');
  }
  .hero {
    background-image: url('/img/hero/bg/768w.jpg');
  }
}
@media (-webkit-min-device-pixel-ratio: 2) and (max-width: 768px), (min-resolution: 192dpi) and (max-width: 768px) {
  .webp .hero {
    background-image: url('/img/hero/bg/1536w.webp');
  }
  .hero {
    background-image: url('/img/hero/bg/1536w.jpg');
  }
}
@media screen and (max-width: 480px) {
  .webp .hero {
    background-image: url('/img/hero/bg/480w.webp');
  }
  .hero {
    background-image: url('/img/hero/bg/480w.jpg');
  }
}
@media (-webkit-min-device-pixel-ratio: 2) and (max-width: 480px), (min-resolution: 192dpi) and (max-width: 480px) {
  .webp .hero {
    background-image: url('/img/hero/bg/960w.webp');
  }
  .hero {
    background-image: url('/img/hero/bg/960w.jpg');
  }
}
</style>

<style scoped>
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

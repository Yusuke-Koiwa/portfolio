<template>
  <section id="skills" class="pt-24 pb-28">
    <Heading title="SKILLS" subtitle="スキル" class="mb-16" />
    <div class="container flex justify-around items-end flex-wrap mx-auto dark:text-white">
      <figure class="w-1/2 md:w-1/3 xl:w-1/4 md:mb-14 pb-24 md:pb-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 rounded-full">
        <img src="/img/skills/HTML5.svg" width="80" height="80" alt="" loading="lazy" class="w-20 h-auto mx-auto mb-10" />
        <figcaption class="text-2xl text-center font-semibold">HTML</figcaption>
      </figure>

      <figure class="w-1/2 md:w-1/3 xl:w-1/4 md:mb-14 pt-24 md:pt-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 rounded-full">
        <div class="flex justify-center items-center">
          <img src="/img/skills/css.svg" width="82" height="95" alt="" loading="lazy" class="w-20 h-auto mb-10 mr-5" />
          <img src="/img/skills/sass.svg" width="99" height="72" alt="" loading="lazy" class="w-20 h-auto mb-10" />
        </div>
        <figcaption class="text-2xl text-center font-semibold">CSS / Sass</figcaption>
      </figure>

      <figure class="w-1/2 md:w-1/3 xl:w-1/4 md:mb-14 pb-24 md:pb-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 rounded-full">
        <img src="/img/skills/javascript.svg" width="75" height="75" alt="" loading="lazy" class="w-18 h-auto mx-auto mb-10" />
        <figcaption class="text-2xl text-center font-semibold">Javascript</figcaption>
      </figure>

      <figure
        class="w-1/2 md:w-1/3 xl:w-1/4 md:mb-14 pt-24 md:pt-0 md:pb-12 xl:pb-0 xl:pt-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 rounded-full"
      >
        <img src="/img/skills/jquery.svg" width="137" height="31" alt="" loading="lazy" class="w-44 h-auto mx-auto mb-10 p-4 bg-white" />
        <figcaption class="text-2xl text-center font-semibold">jQuery</figcaption>
      </figure>

      <figure
        class="w-1/2 md:w-1/3 xl:w-1/4 md:mb-14 pb-24 md:pb-0 md:pt-12 xl:pt-0 xl:pb-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 rounded-full"
      >
        <WPLogo :darkTheme="darkTheme" />
        <figcaption class="text-2xl text-center font-semibold">WordPress</figcaption>
      </figure>

      <figure
        class="w-1/2 md:w-1/3 xl:w-1/4 md:mb-14 pt-24 md:pt-0 md:pb-12 xl:pb-0 xl:pt-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 rounded-full"
      >
        <img src="/img/skills/php.svg" width="160" height="84" alt="" loading="lazy" class="w-28 h-auto mx-auto mb-10" />
        <figcaption class="text-2xl text-center font-semibold">PHP</figcaption>
      </figure>

      <figure
        class="w-1/2 md:w-1/3 xl:w-1/4 md:mb-14 pb-24 md:pb-0 md:pt-8 xl:pt-0 xl:pb-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 rounded-full"
      >
        <div class="flex justify-center items-center">
          <img src="/img/skills/bootstrap.svg" width="82" height="82" alt="" loading="lazy" class="w-16 h-auto mb-10 mr-7" />
          <img src="/img/skills/tailwindcss.svg" width="140" height="84" alt="" loading="lazy" class="w-20 h-auto mb-10" />
        </div>
        <figcaption class="text-2xl text-center font-semibold">Bootstrap / Tailwind</figcaption>
      </figure>

      <figure class="w-1/2 md:w-1/3 xl:w-1/4 md:mb-14 pt-24 md:pt-8 xl:pt-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 rounded-full">
        <img src="/img/skills/vue.svg" width="105" height="105" alt="" loading="lazy" class="w-20 h-auto mx-auto mb-10" />
        <figcaption class="text-2xl text-center font-semibold">Vue.js</figcaption>
      </figure>
    </div>
  </section>
</template>

<script>
import Container from '../Container.vue';
import Heading from '../Heading.vue';
import WPLogo from './WPLogo.vue';
export default {
  components: { Heading, Container, WPLogo },
  props: {
    darkTheme: Boolean,
  },
};
</script>

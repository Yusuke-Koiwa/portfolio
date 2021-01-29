<template>
  <section id="skills" class="pt-24 pb-40">
    <Container>
      <Heading title="SKILLS" subtitle="スキル" class="mb-16" />

      <div class="flex justify-around items-center mb-14 dark:text-white">
        <figure class="w-1/4 mb-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <img src="/static/img/skills/HTML5.svg" width="80" height="80" alt="" loading="lazy" class="w-20 h-auto mx-auto mb-10" />
          <figcaption class="text-2xl text-center font-semibold">HTML</figcaption>
        </figure>
        <figure class="w-1/4 pt-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <div class="flex justify-center items-center">
            <img src="/static/img/skills/css.svg" width="82" height="95" alt="" loading="lazy" class="w-20 h-auto mb-10 mr-5" />
            <img src="/static/img/skills/sass.svg" width="99" height="72" alt="" loading="lazy" class="w-20 h-auto mb-10" />
          </div>
          <figcaption class="text-2xl text-center font-semibold">CSS / Sass</figcaption>
        </figure>
        <figure class="w-1/4 pb-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <div class="flex justify-center items-center mb-10">
            <img src="/static/img/skills/javascript.svg" width="75" height="75" alt="" loading="lazy" class="w-18 h-auto mr-7" />
            <img src="/static/img/skills/jquery.svg" width="137" height="31" alt="" loading="lazy" class="w-36 h-auto p-2 bg-white" />
          </div>
          <figcaption class="text-2xl text-center font-semibold">Javascript / jQuery</figcaption>
        </figure>
        <figure class="w-1/4 pt-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <img src="/static/img/skills/vue.svg" width="105" height="105" alt="" loading="lazy" class="w-20 h-auto mx-auto mb-10" />
          <figcaption class="text-2xl text-center font-semibold">Vue.js</figcaption>
        </figure>
      </div>

      <div class="flex justify-around items-center dark:text-white">
        <figure class="w-1/4 pb-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <img src="/static/img/skills/php.svg" width="160" height="84" alt="" loading="lazy" class="w-28 h-auto mx-auto mb-10" />
          <figcaption class="text-2xl text-center font-semibold">PHP</figcaption>
        </figure>
        <figure class="w-1/4 pt-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <WPLogo :darkTheme="darkTheme" />
          <figcaption class="text-2xl text-center font-semibold">WordPress</figcaption>
        </figure>
        <figure class="w-1/4 pb-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <div class="flex justify-center items-center">
            <img src="/static/img/skills/bootstrap.svg" width="82" height="82" alt="" loading="lazy" class="w-16 h-auto mb-10 mr-7" />
            <img src="/static/img/skills/tailwindcss.svg" width="140" height="84" alt="" loading="lazy" class="w-20 h-auto mb-10" />
          </div>
          <figcaption class="text-2xl text-center font-semibold">Bootstrap / Tailwind</figcaption>
        </figure>
        <figure class="w-1/4 pt-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <div class="flex justify-center items-center">
            <img src="/static/img/skills/ruby@2x.png" width="86" height="111" alt="" loading="lazy" class="w-16 h-auto mb-10 mr-7" />
            <img src="/static/img/skills/rails.svg" width="93" height="93" alt="" loading="lazy" class="w-16 h-auto mb-10" />
          </div>
          <figcaption class="text-2xl text-center font-semibold">Ruby / Rails</figcaption>
        </figure>
      </div>
    </Container>
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

<template>
  <section id="skills" class="pt-14 pb-40">
    <Container>
      <Heading title="SKILLS" subtitle="スキル" class="mb-16" />

      <div class="flex justify-around items-center mb-14 dark:text-white">
        <figure class="w-1/4 mb-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <img src="/static/img/skills/HTML5@2x.png" width="105" height="105" alt="" loading="lazy" class="mx-auto mb-2" />
          <figcaption class="text-2xl text-center font-semibold">HTML</figcaption>
        </figure>
        <figure class="w-1/4 pt-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <div class="flex justify-center items-center">
            <img src="/static/img/skills/css@2x.png" width="82" height="95" alt="" loading="lazy" class="mb-2 mr-4" />
            <img src="/static/img/skills/sass@2x.png" width="99" height="72" alt="" loading="lazy" class="mb-2" />
          </div>
          <figcaption class="text-2xl text-center font-semibold">CSS / Sass</figcaption>
        </figure>
        <figure class="w-1/4 pb-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <div class="flex flex-col items-center">
            <img src="/static/img/skills/javascript@2x.png" width="75" height="75" alt="" loading="lazy" class="mb-2 mr-4" />
            <img src="/static/img/skills/jquery@2x.png" width="137" height="31" alt="" loading="lazy" class="mb-2 p-2 bg-white" />
          </div>
          <figcaption class="text-2xl text-center font-semibold">Javascript / jQuery</figcaption>
        </figure>
        <figure class="w-1/4 pt-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <img src="/static/img/skills/vue@2x.png" width="105" height="105" alt="" loading="lazy" class="mx-auto mb-2" />
          <figcaption class="text-2xl text-center font-semibold">Vue.js</figcaption>
        </figure>
      </div>

      <div class="flex justify-around items-center dark:text-white">
        <figure class="w-1/4 pb-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <img src="/static/img/skills/php@2x.png" width="160" height="84" alt="" loading="lazy" class="mx-auto mb-2" />
          <figcaption class="text-2xl text-center font-semibold">PHP</figcaption>
        </figure>
        <figure class="w-1/4 pt-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <img src="/static/img/skills/wordpress@2x.png" width="105" height="105" alt="" loading="lazy" class="mx-auto mb-2" />
          <figcaption class="text-2xl text-center font-semibold">WordPress</figcaption>
        </figure>
        <figure class="w-1/4 pb-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <div class="flex justify-center items-center">
            <img src="/static/img/skills/bootstrap@2x.png" width="82" height="82" alt="" loading="lazy" class="mb-2 mr-4" />
            <img src="/static/img/skills/tailwindcss@2x.png" width="140" height="84" alt="" loading="lazy" class="mb-2" />
          </div>
          <figcaption class="text-2xl text-center font-semibold">Bootstrap / Tailwind</figcaption>
        </figure>
        <figure class="w-1/4 pt-12 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70">
          <div class="flex justify-center items-center">
            <img src="/static/img/skills/ruby@2x.png" width="86" height="111" alt="" loading="lazy" class="mb-2 mr-4" />
            <img src="/static/img/skills/rails@2x.png" width="93" height="93" alt="" loading="lazy" class="mb-2" />
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
export default {
  name: 'Skills',
  components: { Heading, Container },
};
</script>

<style></style>

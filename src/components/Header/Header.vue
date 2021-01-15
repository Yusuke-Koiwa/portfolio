<template>
  <header class="fixed z-50 w-full h-20 px-6 bg-gradient-to-b from-black">
    <nav class="w-full h-full flex justify-between items-center text-white">
      <h1 class="font-heading text-4xl">Koiwa's Portfolio</h1>
      <ul class="flex font-heading text-xl">
        <li v-for="link in links" :key="link.name" class="px-4">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      links: [
        {
          name: 'ABOUT',
          url: '#about',
        },
        {
          name: 'SKILLS',
          url: '#skills',
        },
        {
          name: 'SERVICE',
          url: '#service',
        },
        {
          name: 'WORKS',
          url: '#works',
        },
        {
          name: 'CONTACT',
          url: '#contact',
        },
      ],
    };
  },
};
</script>

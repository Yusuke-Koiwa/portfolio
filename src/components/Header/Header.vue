<template>
  <header class="fixed z-50 w-full h-20 px-6 bg-gradient-to-b from-black">
    <nav class="w-full h-full flex justify-between items-center text-white">
      <h1 class="font-heading text-4xl whitespace-nowrap">Koiwa's Portfolio</h1>
      <ul class="hidden lg:flex font-heading text-xl">
        <li v-for="link in links" :key="link.name" class="px-4">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
      <div class="mobile-menu lg:hidden absolute top-0 right-0 w-24 h-24 shadow bg-c-gray">
        <button @click="menuOpen = !menuOpen" class="absolute top-7 right-5 w-8 h-8 focus:outline-none">
          <div class="relative w-full h-full">
            <div class="bar absolute top-0 right-0 w-full h-1 bg-black"></div>
            <div class="bar absolute top-2 right-0 w-full h-1 bg-black"></div>
            <div class="bar absolute top-4 right-0 w-full h-1 bg-black"></div>
          </div>
        </button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuOpen: false,
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

<style scoped>
.mobile-menu {
  border-bottom-left-radius: 100%;
}
</style>

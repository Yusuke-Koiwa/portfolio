<template>
  <header class="fixed z-50 w-full h-20 px-6 bg-gradient-to-b from-black">
    <nav class="w-full h-full flex justify-between items-center text-white">
      <h1 class="font-heading text-4xl whitespace-nowrap">Koiwa's Portfolio</h1>
      <Menu :links="links" />
      <MobileMenu :menuOpen="menuOpen" :links="links" @clicked="toggleMenu" />
    </nav>
  </header>
  <transition name="fade" appear>
    <ModalBack v-if="menuOpen" />
  </transition>
</template>

<script>
import Menu from './Menu.vue';
import MobileMenu from './MobileMenu.vue';
import ModalBack from './ModalBack.vue';
export default {
  components: { Menu, MobileMenu, ModalBack },
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
  methods: {
    toggleMenu: function () {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
</style>

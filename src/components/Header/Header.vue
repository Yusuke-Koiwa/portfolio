<template>
  <header class="header absolute lg:fixed z-50 w-full h-20 px-6 bg-gradient-to-b from-black">
    <nav class="nav w-full h-full mx-auto flex justify-between items-center text-white">
      <h1 class="font-heading text-3.5xl sm:text-4xl whitespace-nowrap"><a href="#top" v-smooth-scroll>Koiwa's Portfolio</a></h1>
      <Menu :links="links" />
      <MobileMenu :menuOpen="menuOpen" :links="links" @clicked="toggleMenu" />
    </nav>
  </header>
  <transition name="fade" appear>
    <ModalBack v-if="menuOpen" @click="menuOpen = !menuOpen" />
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
.header {
  transform: translateY(-125%);
  animation: slide-down 0.75s ease-out 1.5s forwards;
}
.nav {
  max-width: 1280px;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
@keyframes slide-down {
  100% {
    transform: none;
  }
}
</style>

<template>
  <header class="header fixed z-50 w-full h-20 px-6 bg-gradient-to-b from-black" :class="{ active: isActive }">
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
      isActive: true,
      menuOpen: false,
      lastScroll: 0,
      processing: false,
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
    handleScroll: function () {
      if (this.processing) return;
      this.processing = true;
      setTimeout(() => {
        const currentScroll = window.scrollY;
        console.log(currentScroll, this.lastScroll);
        if (!this.menuOpen && currentScroll < this.lastScroll - 20) {
          this.isActive = true;
        }
        if (!this.menuOpen && currentScroll > this.lastScroll + 20) {
          this.isActive = false;
        }
        this.lastScroll = currentScroll;
        this.processing = false;
      }, 300);
    },
  },
  mounted() {
    this.lastScroll = window.scrollY;
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.header {
  transform: translateY(-125%);
  transition: transform 0.5s ease-out;
}
.header.active {
  transform: none;
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
</style>

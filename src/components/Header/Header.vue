<template>
  <header class="fixed z-50 w-full h-20 px-6 bg-gradient-to-b from-black">
    <nav class="w-full h-full flex justify-between items-center text-white">
      <h1 class="font-heading text-4xl whitespace-nowrap">Koiwa's Portfolio</h1>
      <ul class="hidden lg:flex font-heading text-xl">
        <li v-for="link in links" :key="link.name" class="px-4">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>

      <div
        class="mobile-menu lg:hidden absolute top-0 right-0 shadow overflow-hidden bg-c-gray dark:bg-dark-gray"
        :class="[menuOpen ? 'opened' : 'w-24 h-24']"
      >
        <button @click="menuOpen = !menuOpen" class="absolute top-6 right-5 focus:outline-none" style="width: 24px; height: 24px">
          <div class="relative w-full h-full">
            <div class="bar bar_top bg-black dark:bg-white" :class="[menuOpen ? 'opened' : '']"></div>
            <div class="bar bar_middle bg-black dark:bg-white" :class="[menuOpen ? 'opened' : '']"></div>
            <div class="bar bar_bottom bg-black dark:bg-white" :class="[menuOpen ? 'opened' : '']"></div>
          </div>
        </button>

        <ul v-if="menuOpen" class="absolute top-12 right-16 font-heading text-2xl text-black dark:text-white">
          <li v-for="link in links" :key="link.name" class="py-4">
            <a :href="link.url" @click="menuOpen = false">{{ link.name }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <transition name="fade" appear>
    <div v-if="menuOpen" class="lg:hidden fixed z-40 top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70"></div>
  </transition>
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
  transition: width 0.3s, height 0.3s;
}
.mobile-menu.opened {
  width: 400px;
  height: 400px;
  /* padding-top: 100%; */
}
.bar {
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  transition: width 0.3s ease-out, transform 0.3s ease-out;
}
.bar_top {
  top: 0;
}
.bar_middle {
  top: 8px;
  width: 80%;
}
.bar_bottom {
  top: 16px;
}
.bar_middle.opened {
  width: 0;
}
.bar_top.opened {
  transform: rotate(45deg) translate(6px, 6px);
}
.bar_bottom.opened {
  transform: rotate(-45deg) translate(6px, -6px);
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

<template>
  <div
    class="mobile-menu lg:hidden fixed top-0 right-0 shadow overflow-hidden bg-c-gray dark:bg-dark-gray"
    :class="[menuOpen ? 'opened' : 'w-24 h-24']"
  >
    <button @click="clicked" class="absolute top-6 right-5 focus:outline-none" style="width: 24px; height: 24px">
      <div class="relative w-full h-full">
        <div class="bar bar_top bg-black dark:bg-white" :class="[menuOpen ? 'opened' : '']"></div>
        <div class="bar bar_middle bg-black dark:bg-white" :class="[menuOpen ? 'opened' : '']"></div>
        <div class="bar bar_bottom bg-black dark:bg-white" :class="[menuOpen ? 'opened' : '']"></div>
      </div>
    </button>

    <ul v-show="menuOpen" class="absolute top-16 right-16 font-heading text-2xl text-black dark:text-white">
      <li v-for="link in links" :key="link.name" class="mb-8" @click="clicked">
        <a :href="link.url" v-smooth-scroll class="block w-full">{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    menuOpen: Boolean,
    links: Array,
  },
  methods: {
    clicked() {
      this.$emit('clicked');
    },
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
</style>

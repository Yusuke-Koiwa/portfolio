<template>
  <div :class="bgClass" class="overflow-hidden bg-contain bg-repeat bg-fixed bg-white dark:bg-black">
    <Header />
    <main>
      <Hero :darkTheme="darkTheme" />
      <About :darkTheme="darkTheme" @toggleTheme="toggleTheme" />
      <Skills />
      <Service />
      <Works />
      <Contact :darkTheme="darkTheme" />
      <Footer />
    </main>
  </div>
</template>

<script>
import Hero from './components/Hero/Hero.vue';
import Header from './components/Header/Header.vue';
import About from './components/About/About.vue';
import Skills from './components/Skills/Skills.vue';
import Service from './components/Service/Service.vue';
import Works from './components/Works/Works.vue';
import Contact from './components/Contact/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Hero,
    Header,
    About,
    Skills,
    Service,
    Works,
    Contact,
    Footer,
  },
  data() {
    return {
      darkTheme: null,
      bgClass: null,
    };
  },
  methods: {
    toggleTheme: function (dark) {
      this.darkTheme = dark;
    },
  },
  watch: {
    darkTheme: function (dark) {
      if (dark) {
        localStorage.theme = 'dark';
        document.querySelector('html').classList.add('dark');
        this.bgClass = 'bg-dark';
      } else {
        localStorage.removeItem('theme');
        document.querySelector('html').classList.remove('dark');
        this.bgClass = 'bg-light';
      }
    },
  },
};
</script>

<style scoped>
.bg-light {
  background-image: url('/static/img/bg-normal.png');
}
.bg-dark {
  background-image: url('/static/img/bg-dark.png');
}
</style>

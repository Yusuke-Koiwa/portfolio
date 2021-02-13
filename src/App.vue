<template>
  <div :class="bgClass" class="overflow-hidden bg-contain bg-repeat bg-fixed bg-white dark:bg-black bg-c-transition" style="min-width: 320px">
    <Header />
    <main>
      <Hero :darkTheme="darkTheme" />
      <About :darkTheme="darkTheme" @toggleTheme="toggleTheme" />
      <Skills :darkTheme="darkTheme" />
      <Service />
      <Works />
      <Contact :darkTheme="darkTheme" />
    </main>
    <Footer :darkTheme="darkTheme" />
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

<style>
.webp .bg-light {
  background-image: url('/img/bg/light-lg.webp');
}
.bg-light {
  background-image: url('/img/bg/light-lg.png');
}
@media screen and (max-width: 768px) {
  .webp .bg-light {
    background-image: url('/img/bg/light-md.webp');
  }
  .bg-light {
    background-image: url('/img/bg/light-md.png');
  }
}
@media screen and (max-width: 560px) {
  .webp .bg-light {
    background-image: url('/img/bg/light-sm.webp');
  }
  .bg-light {
    background-image: url('/img/bg/light-sm.png');
  }
}
.webp .bg-dark {
  background-image: url('/img/bg/dark-lg.webp');
}
.bg-dark {
  background-image: url('/img/bg/dark-lg.png');
}
@media screen and (max-width: 768px) {
  .webp .bg-dark {
    background-image: url('/img/bg/dark-md.webp');
  }
  .bg-dark {
    background-image: url('/img/bg/dark-md.png');
  }
}
@media screen and (max-width: 560px) {
  .webp .bg-dark {
    background-image: url('/img/bg/dark-sm.webp');
  }
  .bg-dark {
    background-image: url('/img/bg/dark-sm.png');
  }
}
</style>

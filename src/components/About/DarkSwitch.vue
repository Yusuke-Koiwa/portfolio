<template>
  <button
    @click="toggleTheme"
    class="switch-wrapper relative bg-c-gray shadow-inner focus:outline-none"
  >
    <img
      :src="imgUrl"
      width="35"
      height="35"
      loading="lazy"
      alt=""
      class="switch-btn absolute left-0 top-0"
      :class="positionClass"
    />
  </button>
</template>

<script>
export default {
  name: 'DarkSwitch',
  data() {
    return {
      darkTheme: null,
      positionClass: null,
      imgUrl: null,
    };
  },
  created() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.querySelector('html').classList.add('dark');
      this.darkTheme = true;
    } else {
      document.querySelector('html').classList.remove('dark');
      this.darkTheme = false;
    }
  },
  methods: {
    toggleTheme: function () {
      if (this.darkTheme) {
        this.darkTheme = false;
      } else {
        this.darkTheme = true;
      }
    },
  },

  watch: {
    darkTheme: function (dark) {
      if (dark) {
        localStorage.theme = 'dark';
        this.positionClass = 'position-right';
        this.imgUrl = '/static/img/about/moon@2x.png';
        document.querySelector('html').classList.add('dark');
      } else {
        localStorage.removeItem('theme');
        this.positionClass = 'position-left';
        this.imgUrl = '/static/img/about/sun@2x.png';
        document.querySelector('html').classList.remove('dark');
      }
    },
  },
};
</script>

<style scoped>
.switch-wrapper {
  width: 100px;
  height: 30px;
  border-radius: 17.5px;
}

.switch-btn {
  width: 50px;
  height: 50px;
  margin-top: -10px;
  transition: transform 0.3s;
  filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.3));
}

.position-left {
  transform: translateX(-5px);
}

.position-right {
  transform: translateX(55px);
}
</style>

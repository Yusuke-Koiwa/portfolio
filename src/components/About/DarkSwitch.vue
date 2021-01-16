<template>
  <button
    @click="toggleTheme"
    class="switch-wrapper relative bg-gray-400 shadow-inner focus:outline-none"
  >
    <img
      :src="imgUrl"
      width="35"
      height="35"
      loading="lazy"
      :alt="imgAlt"
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
      positionClass: null,
      imgUrl: null,
      imgAlt: null,
    };
  },
  props: {
    darkTheme: {
      type: Boolean,
    },
  },
  created() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.querySelector('html').classList.add('dark');
      this.$emit('toggleTheme', true);
    } else {
      document.querySelector('html').classList.remove('dark');
      this.$emit('toggleTheme', false);
    }
  },
  methods: {
    toggleTheme: function () {
      if (this.darkTheme) {
        this.$emit('toggleTheme', false);
      } else {
        this.$emit('toggleTheme', true);
      }
    },
  },

  watch: {
    darkTheme: function (dark) {
      if (dark) {
        this.positionClass = 'position-right';
        this.imgUrl = '/static/img/about/moon@2x.png';
        this.imgAlt = 'ダークモードON';
        this.$emit('toggleTheme', dark);
      } else {
        this.positionClass = 'position-left';
        this.imgUrl = '/static/img/about/sun@2x.png';
        this.imgAlt = 'ダークモードOFF';
        this.$emit('toggleTheme', dark);
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
  margin-top: -11px;
  transition: transform 0.3s;
}

.position-left {
  transform: translateX(-5px);
  filter: drop-shadow(0 0 5px rgba(252, 92, 0, 0.3));
}

.position-right {
  transform: translateX(55px);
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
}
</style>

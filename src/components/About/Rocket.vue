<template>
  <div>
    <img
      v-show="darkTheme"
      src="/static/img/rocket-white.svg"
      width="65"
      height="65"
      loading="lazy"
      alt=""
      class="transform rotate-90 mx-auto mb-8"
    />
    <img
      v-show="!darkTheme"
      src="/static/img/rocket-black.svg"
      width="65"
      height="65"
      loading="lazy"
      alt=""
      class="transform rotate-90 mx-auto mb-8"
    />
  </div>
</template>
<script>
export default {
  props: {
    darkTheme: {
      type: Boolean,
    },
  },
};
</script>

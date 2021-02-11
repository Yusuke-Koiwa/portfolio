<template>
  <img
    :src="[darkTheme ? '/img/contact/contact-waves-dark.svg' : '/img/contact/contact-waves.svg']"
    alt=""
    width="1279"
    height="110"
    loading="lazy"
    class="wave w-full h-auto"
  />
</template>

<script>
export default {
  props: {
    darkTheme: Boolean,
  },
};
</script>

<style scoped>
.wave {
  margin-bottom: -1px;
}
</style>

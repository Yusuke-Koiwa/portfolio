<template>
  <img v-if="darkTheme" src="/static/img/contact-waves-dark.png" alt="" width="1279" height="110" class="w-full" />
  <img v-else src="/static/img/contact-waves-normal.png" alt="" width="1279" height="110" class="w-full" />
</template>

<script>
export default {
  props: {
    darkTheme: Boolean,
  },
};
</script>

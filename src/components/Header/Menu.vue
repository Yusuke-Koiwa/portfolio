<template>
  <ul class="hidden lg:flex font-heading text-xl">
    <li v-for="link in links" :key="link.name" class="px-4">
      <a :href="link.url">{{ link.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: Array,
  },
};
</script>

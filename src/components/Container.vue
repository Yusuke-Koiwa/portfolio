<template>
  <div class="Container mx-auto px-6">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Container',
};
</script>

<style scoped>
.Container {
  max-width: 1280px;
}
</style>

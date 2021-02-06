<template>
  <a href="#top" v-smooth-scroll class="absolute z-30 bottom-0 right-0 mr-2 mb-2 2xl:mr-6">
    <div class="relative">
      <img
        v-show="darkTheme"
        src="/img/rocket-white.svg"
        width="60"
        height="60"
        loading="lazy"
        alt="TOPへ戻る"
        class="w-16 h-auto transform -rotate-45"
      />
      <img
        v-show="!darkTheme"
        src="/img/rocket-black.svg"
        width="60"
        height="60"
        loading="lazy"
        alt="TOPへ戻る"
        class="w-16 h-auto transform -rotate-45"
      />
      <p class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-semibold text-center text-white dark:text-black">
        TOP
      </p>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    darkTheme: Boolean,
  },
};
</script>

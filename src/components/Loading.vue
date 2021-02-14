<template>
  <transition name="fade">
    <div v-if="!loaded" class="loading fixed w-full h-screen flex justify-center items-center bg-dark-gray">
      <!--
      Copyright (c) 2021 by Alex
      Released under the MIT license
      https://codepen.io/AlexWarnes/pen/jXYYKL
      -->
      <div class="solar-system">
        <div class="earth-orbit orbit">
          <div class="planet earth"></div>
          <div class="venus-orbit orbit">
            <div class="planet venus"></div>
            <div class="mercury-orbit orbit">
              <div class="planet mercury"></div>
              <div class="sun"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    loaded: Boolean,
  },
};
</script>

<style scoped>
.loading {
  z-index: 100;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

/*
Copyright (c) 2021 by Alex
Released under the MIT license
https://codepen.io/AlexWarnes/pen/jXYYKL
*/
.solar-system {
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.orbit {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fafbfc;
  border-radius: 50%;
}
.earth-orbit {
  width: 165px;
  height: 165px;
  animation: spin 12s linear 0s infinite;
}
.venus-orbit {
  width: 120px;
  height: 120px;
  animation: spin 7.4s linear 0s infinite;
}
.mercury-orbit {
  width: 90px;
  height: 90px;
  animation: spin 3s linear 0s infinite;
}
.planet {
  position: absolute;
  top: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #3ff9dc;
}
.sun {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fd764d;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>

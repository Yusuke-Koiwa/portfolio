<template>
  <div class="slider-wrapper">
    <div class="bg-c-gray">
      <Container>
        <swiper :slides-per-view="2" :space-between="50" :loop="true" navigation @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
        </swiper>
      </Container>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import Container from '../Container.vue';
SwiperCore.use([Navigation]);

export default {
  name: 'Slider',
  components: {
    Swiper,
    SwiperSlide,
    Container,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
};
</script>

<style scoped>
.slider-wrapper {
  padding-left: 11%;
}
</style>

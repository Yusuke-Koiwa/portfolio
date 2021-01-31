<template>
  <div class="slider-wrapper">
    <div class="relative">
      <div class="slider-bg absolute bottom-0 top-0 left-0 right-0 bg-c-gray dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-90"></div>
      <Container class="md:pl-16 2xl:pl-6">
        <swiper
          ref="mySwiper"
          :slides-per-view="1"
          :space-between="0"
          :loop="true"
          :breakpoints="{ 768: { slidesPerView: 2, spaceBetween: 0 } }"
          navigation
          class="dark:text-white"
        >
          <swiper-slide class="flex flex-col h-auto justify-between">
            <div>
              <img src="/static/img/works/works02@2x.png" alt="" width="1264" height="580" loading="lazy" class="mb-5" />
              <div class="slide-text mx-auto md:px-6">
                <h3 class="slide-heading mb-6 text-2xl text-center font-semibold">完全版マハーバーラタ（模写×WordPress）</h3>
                <p class="mb-3 text-lg">
                  実際の案件で使用されたXDデザインを元に模写したサイトです。WordPressサイト化し、ニュース、販売スケジュール、キャストなどをクライアント様側
                  で簡単に更新できるようにしました。サイトの確認には認証が必要です。
                </p>
                <p class="mb-3">ユーザー名：iwa<br />パスワード：iwa</p>
              </div>
            </div>
            <Link-button :url="'https://mb.iwa-portfolio.com/'" />
          </swiper-slide>

          <swiper-slide class="flex flex-col h-auto justify-between">
            <div>
              <img src="/static/img/works/works03@2x.png" alt="" width="1264" height="580" loading="lazy" class="mb-5" />
              <div class="slide-text mx-auto md:px-6">
                <h3 class="slide-heading mb-6 text-2xl text-center font-semibold">Engress（WordPress架空企業サイト）</h3>
                <p class="slide-text mb-3 text-lg">
                  WordPressを用いて構築した架空の企業サイトです。XDデザインを元にコーディングを行なっております。ブログ、お知らせ、料金プランなどをクライアント様側で簡単に更新できるようにしました。サイトの確認には認証が必要です。
                </p>
                <p class="mb-3">ユーザー名：iwa<br />パスワード：iwa</p>
              </div>
            </div>
            <Link-button :url="'https://iwa-portfolio.com/'" />
          </swiper-slide>

          <swiper-slide class="flex flex-col h-auto justify-between">
            <div>
              <img src="/static/img/works/works01@2x.png" alt="" width="1264" height="580" loading="lazy" class="mb-5" />
              <div class="slide-text mx-auto md:px-6">
                <h3 class="slide-heading mb-6 text-2xl text-center font-semibold">Anytime Nature</h3>
                <p class="mb-5 text-lg">
                  写真を投稿できるWebアプリケーションです。 バックエンドのサーバー処理から、フロント
                  エンドの実装まで全て個人で開発しました。バックエンドはRuby on Rails、画像の保存は AWS S3を使用しています。
                </p>
              </div>
            </div>
            <Link-button :url="'https://anytime-nature.herokuapp.com/'" />
          </swiper-slide>
        </swiper>
      </Container>
      <SlideBtn @prevClick="prevSlide" @nextClick="nextSlide" />
    </div>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import Container from '../Container.vue';
import LinkButton from './LinkButton.vue';
import SlideBtn from './SlideBtn.vue';
SwiperCore.use([Navigation]);

export default {
  components: {
    Swiper,
    SwiperSlide,
    Container,
    LinkButton,
    SlideBtn,
  },
  methods: {
    prevSlide() {
      document.getElementsByClassName('swiper-button-prev')[0].click();
    },
    nextSlide() {
      document.getElementsByClassName('swiper-button-next')[0].click();
    },
  },
};
</script>

<style>
@media screen and (min-width: 768px) {
  .slider-wrapper {
    padding-left: 11%;
  }
}
.slide-text {
  max-width: 500px;
}
@media screen and (min-width: 768px) {
  .slide-heading {
    min-height: 4rem;
  }
}
.swiper-button-next,
.swiper-button-prev {
  visibility: hidden;
}
</style>

<style scoped>
.slider-bg {
  transform: translateY(2rem);
}
</style>

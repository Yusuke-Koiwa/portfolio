<template>
  <div class="slider-wrapper">
    <div class="relative">
      <div class="slider-bg absolute bottom-0 top-0 left-0 right-0 bg-c-gray dark:bg-dark-gray"></div>
      <Container>
        <swiper ref="mySwiper" :slides-per-view="2" :space-between="50" :loop="true" navigation class="dark:text-white">
          <swiper-slide class="flex flex-col h-auto justify-between">
            <img src="/static/img/works/works01@2x.png" alt="" width="1264" height="580" loading="lazy" class="mb-9" />
            <h3 class="slide-text mb-9 text-3xl text-center font-semibold">Anytime Nature</h3>
            <div class="slide-text mb-9 text-lg">
              <p>
                写真を投稿できるWebアプリケーションです。 バックエンドのサーバー処理から、フロント
                エンドの実装まで全て個人で開発しました。バックエンドはRuby on Rails、画像の保存は AWS S3を使用しています。
              </p>
            </div>
            <Link-button :url="'https://anytime-nature.herokuapp.com/'" />
          </swiper-slide>

          <swiper-slide class="flex flex-col h-auto justify-between">
            <img src="/static/img/works/works02@2x.png" alt="" width="1264" height="580" loading="lazy" class="mb-9" />
            <h3 class="mb-9 text-3xl text-center font-semibold">完全版マハーバーラタ（模写×WordPress）</h3>
            <div class="slide-text">
              <p class="mb-3 text-lg">
                実際の案件で使用されたXDデザインを元に模写したサイトです。WordPressサイト化し、ニュース、販売スケジュール、キャストなどをクライアント様側
                で簡単に更新できるようにしました。サイトの確認には認証が必要です。
              </p>
              <p class="mb-3">ユーザー名：iwa<br />パスワード：iwa</p>
            </div>
            <Link-button :url="'https://mb.iwa-portfolio.com/'" />
          </swiper-slide>

          <swiper-slide class="flex flex-col h-auto justify-between">
            <img src="/static/img/works/works03@2x.png" alt="" width="1264" height="580" loading="lazy" class="mb-9" />
            <h3 class="mb-9 text-3xl text-center font-semibold">Engress（WordPress架空企業サイト）</h3>
            <div class="slide-text">
              <p class="mb-3 text-lg">
                WordPressを用いて構築した架空の企業サイトです。XDデザインを元にコーディングを行なっております。ブログ、お知らせ、料金プランなどをクライアント様側で簡単に更新できるようにしました。サイトの確認には認証が必要です。
              </p>
              <p class="mb-3">ユーザー名：iwa<br />パスワード：iwa</p>
            </div>
            <Link-button :url="'https://iwa-portfolio.com/'" />
          </swiper-slide>
        </swiper>
      </Container>

      <div class="btn-container absolute z-10 top-1/2 left-0">
        <button
          class="slider-btn mr-3.5 rounded-full text-3xl font-semibold bg-gray-300 dark:bg-gray-600 dark:text-white shadow focus:outline-none"
          @click="prevSlide"
        >
          ＜
        </button>
        <button
          class="slider-btn rounded-full text-3xl font-semibold bg-gray-300 dark:bg-gray-600 dark:text-white shadow focus:outline-none"
          @click="nextSlide"
        >
          ＞
        </button>
      </div>
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
SwiperCore.use([Navigation]);

export default {
  name: 'Slider',
  components: {
    Swiper,
    SwiperSlide,
    Container,
    LinkButton,
  },
  methods: {
    prevSlide() {
      document.getElementsByClassName('swiper-button-next')[0].click();
    },
    nextSlide() {
      document.getElementsByClassName('swiper-button-prev')[0].click();
    },
  },
};
</script>

<style>
.slider-wrapper {
  padding-left: 11%;
}
.slide-text {
  padding: 0 10%;
}
.swiper-button-next,
.swiper-button-prev {
  visibility: hidden;
}
</style>

<style scoped>
.slider-bg {
  transform: translateY(35px);
}
.btn-container {
  transform: translateX(-70%);
}
.slider-btn {
  width: 70px;
  height: 70px;
}
</style>

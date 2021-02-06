<template>
  <div class="slider-wrapper">
    <div class="relative">
      <div class="slider-bg absolute bottom-0 top-0 left-0 right-0 bg-c-gray dark:bg-dark-gray bg-opacity-90 dark:bg-opacity-90"></div>
      <Container class="js-step slide-container md:pl-16 2xl:pl-6">
        <swiper
          ref="mySwiper"
          :slides-per-view="1"
          :space-between="0"
          :loop="true"
          :breakpoints="{ 768: { slidesPerView: 2 } }"
          navigation
          class="dark:text-white"
        >
          <swiper-slide class="flex flex-col h-auto justify-between">
            <div>
              <img src="/static/img/works/works03@2x.png" alt="" width="1264" height="580" loading="lazy" class="mb-5" />
              <div class="slide-text mx-auto md:px-6">
                <h3 class="slide-heading mb-6 text-2xl text-center font-semibold">Engress</h3>
                <p class="slide-text mb-3 text-lg">
                  WordPressを用いた企業サイトの構築例。Xdデザインカンプを元にコーディングを行ないました。ブログやお知らせの記事をWordPress管理画面から投稿できます。
                </p>
                <p class="mb-3">サイトの確認には認証が必要です。<br />ユーザー名：koiwa<br />パスワード：koiwaworks</p>
              </div>
            </div>
            <Link-button :url="'https://iwa-portfolio.com/'" />
          </swiper-slide>

          <swiper-slide class="flex flex-col h-auto justify-between">
            <div>
              <img src="/static/img/works/works02@2x.png" alt="" width="1264" height="580" loading="lazy" class="mb-5" />
              <div class="slide-text mx-auto md:px-6">
                <h3 class="slide-heading mb-6 text-2xl text-center font-semibold">完全版マハーバーラタ</h3>
                <p class="mb-3 text-lg">
                  実際の案件で使用されたデザインカンプを元に模写したサイトです。ニュース、販売スケジュールなどをWordPress管理画面から更新できます。
                </p>
                <p class="mb-3">サイトの確認には認証が必要です。<br />ユーザー名：koiwa<br />パスワード：koiwaworks</p>
              </div>
            </div>
            <Link-button :url="'https://mb.iwa-portfolio.com/'" />
          </swiper-slide>

          <swiper-slide class="flex flex-col h-auto justify-between">
            <div>
              <img src="/static/img/works/works01@2x.png" alt="" width="1264" height="580" loading="lazy" class="mb-5" />
              <div class="slide-text mx-auto md:px-6">
                <h3 class="slide-heading mb-6 text-2xl text-center font-semibold">Anytime Nature</h3>
                <p class="mb-5 text-lg">
                  「いつでも自然を」をテーマに、自然に関する写真をユーザーが投稿できるWebアプリケーションです。
                  投稿された写真にコメントやいいねを送ったり、気に入ったユーザーをフォローできる機能もあります。
                  バックエンドからフロントエンドの実装まで全て個人で開発しました。
                </p>
              </div>
            </div>
            <Link-button :url="'https://anytime-nature.herokuapp.com/'" />
          </swiper-slide>

          <swiper-slide class="flex flex-col h-auto justify-between">
            <div>
              <img src="/static/img/works/works04@2x.png" alt="" width="1264" height="580" loading="lazy" class="mb-5" />
              <div class="slide-text mx-auto md:px-6">
                <h3 class="slide-heading mb-6 text-2xl text-center font-semibold">Koiwa's Portfolio</h3>
                <p class="mb-5 text-lg">
                  当ポートフォリオサイト。JavaScriptフレームワークのVue.jsを用いて作成。ダークモード切替え機能や、スクロール検知でのアニメーション表示、Googleフォームと連携したお問合せフォームの設置などを実装しています。
                </p>
              </div>
            </div>
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
.swiper-button-next,
.swiper-button-prev {
  visibility: hidden;
}
.slide-container {
  transform: translateX(100%);
  transition: transform 0.75s ease-in-out;
}
.slide-container.active {
  transform: translateX(0);
}
</style>

<style scoped>
.slider-bg {
  transform: translateY(2rem);
}
</style>

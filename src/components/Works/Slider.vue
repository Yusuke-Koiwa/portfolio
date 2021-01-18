<template>
  <div class="slider-wrapper">
    <div class="relative">
      <div class="slider-bg bg-c-gray absolute bottom-0 top-0 left-0 right-0"></div>
      <Container>
        <swiper :slides-per-view="2" :space-between="50" :loop="true" navigation @swiper="onSwiper" @slideChange="onSlideChange">
          <swiper-slide class="relative">
            <img src="/static/img/works/works01@2x.png" alt="" class="mb-9" />
            <div class="swiper-slide-text">
              <h3 class="mb-9 text-3xl text-center font-semibold">Anytime Nature</h3>
              <p class="mb-9 text-lg">
                写真を投稿できるWebアプリケーションです。 バックエンドのサーバー処理から、フロント
                エンドの実装まで全て個人で開発しました。バックエンドはRuby on Rails、画像の保存は AWS S3を使用しています。
              </p>
              <Link-button :url="'#'" />
            </div>
          </swiper-slide>

          <swiper-slide class="relative">
            <img src="/static/img/works/works02@2x.png" alt="" class="mb-9" />
            <div class="swiper-slide-text">
              <h3 class="mb-9 text-3xl text-center font-semibold">完全版マハーバーラタ（模写×WordPress）</h3>
              <p class="mb-3 text-lg">
                実際の案件で使用されたXDデザインを元に模写したサイトです。WordPressサイト化し、ニュース、販売スケジュール、キャストなどをクライアント様側
                で簡単に更新できるようにしました。サイトの確認には認証が必要です。
              </p>
              <p class="mb-9">ユーザー名：iwa<br />パスワード：iwa</p>
              <Link-button :url="'#'" />
            </div>
          </swiper-slide>

          <swiper-slide class="relative">
            <img src="/static/img/works/works03@2x.png" alt="" class="mb-9" />
            <div class="swiper-slide-text">
              <h3 class="mb-9 text-3xl text-center font-semibold">Engress（WordPress架空企業サイト）</h3>
              <p class="mb-3 text-lg">
                WordPressを用いて構築した架空の企業サイトです。XDデザインを元にコーディングを行なっております。ブログ、お知らせ、料金プランなどをクライアント様側で簡単に更新できるようにしました。サイトの確認には認証が必要です。
              </p>
              <p class="mb-9">ユーザー名：iwa<br />パスワード：iwa</p>
              <Link-button :url="'#'" />
            </div>
          </swiper-slide>
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
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
  },
};
</script>

<style>
.slider-wrapper {
  padding-left: 11%;
}
.swiper-slide-text {
  padding: 0 10%;
}
.swiper-button-next,
.swiper-button-prev {
  visibility: hidden;
  /* z-index: 10;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 1px 10px #777;
  color: black;
  background-color: #c3c3c3; */
}
</style>

<style scoped>
.slider-bg {
  transform: translateY(35px);
}
</style>

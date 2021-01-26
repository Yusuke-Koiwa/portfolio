<template>
  <section id="service" class="pt-24 pb-40">
    <Heading title="SERVICE" subtitle="サービス" class="mb-16"></Heading>
    <div class="relative">
      <Service-item
        :number="1"
        label="Webサイト制作"
        imgUrl="/static/img/service/landing_page.png"
        :imgSize="200"
        :isRight="false"
        class="relative z-10 mb-48"
        >ランディングページなどのwebサイト制作をおこないます。スマホやタブレット端末での表示に対するレスポンシブ化のほか、
        アニメーションを用いた動きのあるWebサイト制作が得意です。</Service-item
      >
      <Service-item
        :number="2"
        label="WordPressサイト制作/移行"
        imgUrl="/static/img/skills/wordpress@2x.png"
        :imgSize="150"
        :isRight="true"
        class="relative z-10 mb-48"
        >ブログやお知らせなど、更新が必要なWebサイトはWordPressで制作いたします。
        既存WordPress移行やテーマのカスタマイズ、オリジナルテーマの制作が可能です。
        その他、サイトの高速化、セキュリティ対策、内部SEO対策などもお任せください。</Service-item
      >
      <Service-item
        :number="3"
        label="ECサイト構築"
        imgUrl="/static/img/service/online_shopping.png"
        :imgSize="200"
        :isRight="false"
        class="relative z-10"
        >Stripeを用いたクレジットカード決済機能の実装や、WordPressプラグインである
        WelcartやWooCommerceを使ったECサイトの構築が可能です。</Service-item
      >
      <div class="absolute border border-c-gray rounded-full opacity-60" style="top: 10%; right: 5%; width: 300px; height: 300px"></div>
      <div class="absolute border border-c-gray rounded-full opacity-60" style="top: 28%; right: 0; width: 178px; height: 178px"></div>
      <div class="absolute border border-c-gray rounded-full opacity-60" style="top: 32%; left: 0; width: 178px; height: 178px"></div>
      <div class="absolute border border-c-gray rounded-full opacity-60" style="top: 52.5%; left: 35%; width: 225px; height: 225px"></div>
      <div class="absolute border border-c-gray rounded-full opacity-60" style="top: 82.5%; left: 0; width: 104px; height: 104px"></div>
      <div class="absolute border border-c-gray rounded-full opacity-60" style="top: 95%; right: 0; width: 178px; height: 178px"></div>
    </div>
  </section>
</template>

<script>
import Container from '../Container.vue';
import Heading from '../Heading.vue';
import ServiceItem from './ServiceItem.vue';
export default {
  name: 'Service',
  components: { Container, Heading, ServiceItem },
};
</script>

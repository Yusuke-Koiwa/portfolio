<template>
  <section id="service" class="pt-24 pb-40">
    <Heading title="SERVICE" subtitle="サービス" class="mb-16"></Heading>
    <div class="relative">
      <Service-item
        :number="1"
        label="Webサイト制作"
        webpSrcset="/img/service/lp/landing_page@200w.webp 1x, /img/service/lp/landing_page@400w.webp 2x"
        pngSrcset="/img/service/lp/landing_page@200w.png 1x, /img/service/lp/landing_page@400w.png 2x"
        imgUrl="/img/service/lp/landing_page@200w.png"
        imgClass="img-lg"
        :isRight="false"
        class="relative z-10 mb-48"
        >ランディングページなどのwebサイト制作をおこないます。スマホやタブレット端末での表示に対するレスポンシブ化のほか、
        アニメーションを用いた動きのあるWebサイト制作が得意です。</Service-item
      >
      <Service-item
        :number="2"
        label="WordPress制作"
        webpSrcset="/img/skills/wp/wordpress@160w.webp 1x, /img/skills/wp/wordpress@320w.webp 2x"
        pngSrcset="/img/skills/wp/wordpress@160w.png 1x, /img/skills/wp/wordpress@320w.png 2x"
        imgUrl="/img/skills/wp/wordpress@160w.png"
        imgClass="img-md"
        :isRight="true"
        class="relative z-10 mb-48"
        >ブログやお知らせなど、更新が必要なWebサイトはWordPressで制作致します。 既存テーマのカスタマイズ、オリジナルテーマの制作が可能です。
        その他、サイトの高速化、セキュリティ対策、内部SEO対策などもお任せください。</Service-item
      >
      <Service-item
        :number="3"
        label="ECサイト構築"
        webpSrcset="/img/service/shop/online_shopping@200w.webp 1x, /img/service/shop/online_shopping@400w.webp 2x"
        pngSrcset="/img/service/shop/online_shopping@200w.png 1x, /img/service/shop/online_shopping@400w.png 2x"
        imgUrl="/img/service/shop/online_shopping@200w.png"
        imgClass="img-lg"
        :isRight="false"
        class="relative z-10"
        >Stripeを用いたクレジットカード決済機能の実装や、WordPressプラグインである
        WelcartやWooCommerceを使ったECサイトの構築が可能です。</Service-item
      >
      <Background />
    </div>
  </section>
</template>

<script>
import Container from '../Container.vue';
import Heading from '../Heading.vue';
import ServiceItem from './ServiceItem.vue';
import Background from './Background.vue';
export default {
  components: { Container, Heading, ServiceItem, Background },
};
</script>

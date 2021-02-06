function is_IE() {
  var userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1) {
    return true;
  }
  return false;
}

document.addEventListener('DOMContentLoaded', function () {
  if (is_IE()) {
    alert(
      'お使いのブラウザは閲覧推奨環境ではありません。\nウェブサイトが正しく表示されない場合がありますのでご了承ください。\nGoogle Chrome や Microsoft Edge のご利用をおすすめ致します。'
    );
  }
});

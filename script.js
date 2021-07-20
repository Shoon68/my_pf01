//トップから下にスクロール時、ヘッダー背景色変更
$(window).on('scroll', function (){
   if($(this).scrollTop() > 0) {
      $('.header').addClass('active');
      $('.burger').addClass('active');
   } else {
      $('.header').removeClass('active');
      $('.burger').removeClass('active');
   }
});

// トップぺージ、お知らせモーダルウィンドウ　表示/非表示
$('.burger').on('click', function() {
   $('.burger').toggleClass('open');
   $('.modal').toggleClass('open');
   $('body').toggleClass('fixed');
});

// pcデザイン時のヘッダー内ナビゲーション、SERVICEのプルダウンメニューの画像切り替え
$(function() {
   $(".service-navlist01").hover(function() {
      $(".main-view img").attr("src", "image/bg-order-house@2x.jpg");
   });
   $(".service-navlist02").hover(function() {
      $(".main-view img").attr("src", "image/bg-store@2x.jpg");
   });
   $(".service-navlist03").hover(function() {
      $(".main-view img").attr("src", "image/bg-renovation@2x.jpg");
   });
   $(".service-navlist04").hover(function() {
      $(".main-view img").attr("src", "image/bg-furniture@2x02.jpg");
   });
   $(".service-navlist05").hover(function() {
      $(".main-view img").attr("src", "image/bg-furniture-sale@2x02.jpg");
   });
});

// ファーストビューのスライドショー
const swiper = new Swiper('.swiper-container', {
   // Optional parameters
   effect: 'fade',
   speed: 2000,
   loop: true,
   autoplay: {
		delay: 4300,
		stopOnLastSlide: false,
		disableOnInteraction: false,
		reverseDirection: false
	},
   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },
   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   // And if we need scrollbar
   scrollbar: {
      el: '.swiper-scrollbar',
   },
});

// ファーストビューのテキストを一文字づつspanタグで囲む
const animationTargetElements = document.querySelectorAll('.fv-txt');
for (let i = 0; i < animationTargetElements.length; i++) {
   const targertElement = animationTargetElements[i],
   texts = targertElement.textContent;
   textsArray = [];
   targertElement.textContent = "";
   for (let j = 0; j < texts.split("").length; j++) {
      textsArray.push('<span><span style="animation-delay: ' + (j * 0.08) + 's">' + texts.split("")[j] + '</span></span>')
   }
   
   for (let k = 0; k < textsArray.length; k++) {
      targertElement.innerHTML += textsArray[k];
   }
}

// スクロール時、要素をフェードイン
window.onload = function() {
   scroll_effect();

   $(window).scroll(function(){
      scroll_effect();
   });

   function scroll_effect(){
      $('.effect-fade').each(function(){
         var elemPos = $(this).offset().top;
         var scroll = $(window).scrollTop();
         var windowHeight = $(window).height();
         if (scroll > elemPos - windowHeight){
            $(this).addClass('effect-scroll');
         }
      });
   }
};



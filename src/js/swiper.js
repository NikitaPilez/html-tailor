const SPEED_SLIDE = 800;

let imageSwiper = new Swiper('.js-swiper-container-horizontal', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    speed: SPEED_SLIDE
});

let swiperVertical = new Swiper('.js-swiper-container-vertical', {
    loop: true,
    direction: 'vertical',
    centeredSlides: true,
    slidesPerView: 3,
    speed: SPEED_SLIDE,
    spaceBetween: 20,
});

let descriptionSwiper = new Swiper('.js-description-swiper', {
    loop: true,
    speed: SPEED_SLIDE,
    allowTouchMove: false,
    effect: 'fade'
});

imageSwiper.on('slideNextTransitionStart', function() {
    swiperVertical.slideNext(SPEED_SLIDE, false);
    descriptionSwiper.slideNext(SPEED_SLIDE, false);
});

imageSwiper.on('slidePrevTransitionStart', function() {
    swiperVertical.slidePrev(SPEED_SLIDE, false);
    descriptionSwiper.slidePrev(SPEED_SLIDE, false);
});

swiperVertical.on('slideNextTransitionStart', function(horizontalSwiper) {
    imageSwiper.slideNext(SPEED_SLIDE, false);
    descriptionSwiper.slideNext(SPEED_SLIDE, false);
});

swiperVertical.on('slidePrevTransitionStart', function(horizontalSwiper) {
    imageSwiper.slidePrev(SPEED_SLIDE, false);
    descriptionSwiper.slidePrev(SPEED_SLIDE, false);
});

$('.swiper-image-vertical-container').on('click', function() {
    if ($(this).parent().hasClass('swiper-slide-prev')) {
        descriptionSwiper.slidePrev(SPEED_SLIDE, false);
        swiperVertical.slidePrev(SPEED_SLIDE, false);
        imageSwiper.slidePrev(SPEED_SLIDE, false);
    } else if ($(this).parent().hasClass('swiper-slide-next')) {
        descriptionSwiper.slideNext(SPEED_SLIDE, false);
        swiperVertical.slideNext(SPEED_SLIDE, false);
        imageSwiper.slideNext(SPEED_SLIDE, false);
    }
});

let pageSlider = new Swiper('.wrapper',{

    wrapperClass:  "page__wrapper",
    slideClass: "page__screen",

    direction: 'vertical',

    slidesPerView: 'auto',

    parallax: true,


keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
},

mousewhell: {
    sensivity: 1,
}
,
watchOverflow: true,

speed: 800,

observer: true,

observeParents: true,

pagination: {
    el: '.page__pagination',
    type: 'bullets',
    clickable: true,
    bulletClass: "page__bullet",
    bulletActiveClass: "page__bullet_active",
},

scrollbar: {
    el: '.page__scroll',
    dragClass: "page__drag-scroll",
    draggable:true
}


})
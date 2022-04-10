const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },

    // Управление стрелками с клавы
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    // Управление колесом мыши
    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".swiper"
    },
    // ПОдстройка высоты слайдера для каждого изображения
    autoHeight: true,
    // Количество слайдов для показа
    slidesPerView: 3,
    // Если слайдов меньше чем в slidesPerview, то свайпер отключится
    watchOverflow: true,

    //автопрокрутка
    autoplay: {
        delay: 2000, //пауза при прокрутке
        //оставка прокрутки на последнем слайде
        stopOnLastSlide: false,
        disableOnInteraction: false //откл. после ручного переключения
    },
    speed: 800,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    },
});
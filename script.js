const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',

        renderBullet: function (index, className) {
            return `<span class = "` + className + `">` + `<p>` + `0` + (index + 1) + `</p>` + `</span>`
        }
    },
    direction: 'vertical'
})

const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
})

const tool__element = document.querySelectorAll('.tool__element');

const tool__element_open = document.querySelectorAll('.tool__element_open')

const cases__button =document.querySelectorAll('.cases__button')

const cases__element_main=document.querySelectorAll('.cases__element_main')
tool__element.forEach((e, i) => {
    e.addEventListener('click', function () {

        tool__element.forEach((el, index) => {
            el.classList.remove('tool__element-active')
            tool__element_open[index].classList.remove('tool__element_open-active')
        })
        e.classList.add('tool__element-active');
        tool__element_open[i].classList.add('tool__element_open-active')

    })
})
cases__button.forEach((e, i) => {
    e.addEventListener('click', function () {

        cases__button.forEach((el, index) => {
            el.classList.remove('cases__button-active')
            cases__element_main[index].classList.remove('cases__element_main-active')
        })
        e.classList.add('cases__button-active');
        cases__element_main[i].classList.add('cases__element_main-active')

    })
})

const swiper3 =new Swiper('.swiper3',{
    slidesPerView:1,

    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    }
})

const swiper4 = new Swiper('.swiper4', {
    slidesPerView: 3,
    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    },
    spaceBetween:24
})
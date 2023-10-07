const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,

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
    // direction: 'vertical',
    loop: true,

    breakpoints: {
        730: {
            direction: 'vertical',
        }
    }
})

const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,

    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    loop: true,

    breakpoints: {
        730:{
            slidesPerView: 2,

        },
        1350: {
            slidesPerView: 3,
        }
    }

})

const tool__element = document.querySelectorAll('.tool__element');

const tool__element_open = document.querySelectorAll('.tool__element_open')

const cases__button = document.querySelectorAll('.cases__button')

const cases__element_main = document.querySelectorAll('.cases__element_main')
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

const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,

    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    loop: true

})

const swiper4 = new Swiper('.swiper4', {
    slidesPerView: 2,
    navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
    },
    spaceBetween: 18,
    loop: true,

    breakpoints: {
        1350: {
            slidesPerView: 3,
            spaceBetween: 24,

        }
    }
})

const swiper5 = new Swiper('.swiper5', {
    slidesPerView: 3,
    navigation: {
        nextEl: '.swiper-button-next5',
        prevEl: '.swiper-button-prev5',
    },
    loop: true,

    breakpoints: {
        1350: {
            slidesPerView: 5,
        }
    }

})



const checkedBut = document.querySelectorAll('.checkedBut');

const inputCheck = document.querySelectorAll('.inputCheck input');

inputCheck.forEach((e, i) => {
    e.addEventListener('click', function () {
        if (e.checked == false) {
            checkedBut[i].disabled = true;
            checkedBut[i].classList.add('disabled')
        }
        else {
            checkedBut[i].disabled = false;
            checkedBut[i].classList.remove('disabled')
        }
    })
})
const account__mother = document.querySelector('.account__mother');
const acount_OK = document.querySelector('.account_OK_mother')

const loginToCabinet = document.querySelectorAll('.loginToCabinet');

loginToCabinet.forEach(e => {
    e.addEventListener('click', function () {
        account__mother.classList.add('displayFlex')
        document.body.classList.add('overflow')
    })
})
account__mother.addEventListener('click', function (e) {
    if (e.target.classList.contains('displayFlex')) {
        account__mother.classList.remove('displayFlex')
        document.body.classList.remove('overflow')
    }
})

loginToCabinet[2].onclick = function () {
    document.body.classList.add('overflow')
    acount_OK.classList.add('displayFlex')

}
acount_OK.addEventListener('click', function (e) {
    if (e.target.classList.contains('displayFlex')) {
        acount_OK.classList.remove('displayFlex')
        document.body.classList.remove('overflow')
    }
})

const confidation__mother = document.querySelector('.confidation__mother')

const confidation = document.querySelector('.confidation')
const confidation2 = document.querySelector('.confidation2')

confidation.onclick = function () {
    confidation__mother.classList.add('displayFlex')
    document.body.classList.add('overflow')
}
confidation2.onclick = function () {
    confidation__mother.classList.add('displayFlex')
    document.body.classList.add('overflow')
}

confidation__mother.addEventListener('click', function (e) {
    if (e.target.classList.contains('displayFlex')) {
        confidation__mother.classList.remove('displayFlex')
        document.body.classList.remove('overflow')
    }
})


const sticky__call3__1 = document.querySelector('.sticky__call3__1')
const sticky__call3__2 = document.querySelector('.sticky__call3__2');

const sticky__call3__open1 = document.querySelector('.sticky__call3__open1')
const sticky__call3__open2 = document.querySelector('.sticky__call3__open2')


sticky__call3__1.addEventListener('click', function () {
    sticky__call3__1.classList.add('displayNone')
    sticky__call3__2.classList.add('displayBlock')
    sticky__call3__open1.classList.add('left1')
    sticky__call3__open2.classList.add('left2')
})

sticky__call3__2.addEventListener('click', function () {
    sticky__call3__1.classList.remove('displayNone')
    sticky__call3__2.classList.remove('displayBlock')
    sticky__call3__open1.classList.remove('left1')
    sticky__call3__open2.classList.remove('left2')
})

const burgerButton =document.querySelector('.burgerButton')

const burger__menu=document.querySelector('.burger__menu');

burgerButton.addEventListener('click',function(){
    burger__menu.classList.add('right0')
})
const close =document.querySelector('.close')
close.addEventListener('click',function(){
    burger__menu.classList.remove('right0')
})

//đổi menu
var menu = document.querySelector('header');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 80)
        menu.classList.add('doimenu');
    else
        menu.classList.remove('doimenu');

});
//nav-hambuger
let menu2 = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav-bar');
let section = document.querySelectorAll('section');
let chucnang = document.querySelector('.chucnang')

menu2.onclick = () => {
    menu2.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    chucnang.classList.toggle('active');
}
for (let i = 0; i < section.length; i++) {
    section[i].onclick = () => {
        console.log('pro');
        menu2.classList.remove('fa-times');
        navbar.classList.remove('active');
        chucnang.classList.remove('active');
       
    }
}

window.onscroll = () => {
    menu2.classList.remove('fa-times');
    navbar.classList.remove('active');
    chucnang.classList.remove('active');
    // nút top
    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');

    }
    else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}
//slick
$(document).ready(function () {
    $('.multiple-items').slick(
        {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 7000,
            prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
            nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
            responsive: [
                {
                    breakpoint: 1320,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,

                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,

                    }
                },
                {
                    breakpoint: 792,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        // arrows: false,
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ],
        }
    );
});
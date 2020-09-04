$(function(){
    $('.slider__box').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 950
    });

    $('.about-us__content-slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',
        dots: true,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<button> </button>';
            },
    });
});
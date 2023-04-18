$(document).ready(function () {
    $('[data-bs-toggle="offcanvas"]').on('click', function () {
        const offcanvas = $(this).attr('data-bs-target')
        $('.offcanvas-overlay').addClass('active')
        $(offcanvas).addClass('active')
        $('body').addClass('modal-open')
    })

    $('.offcanvas-overlay').click(function () {
        $('.offcanvas').removeClass('active')
        $(this).removeClass('active')
        $('body').removeClass('modal-open')
    })

    $('.btn-close').click(function () {
        const data = '.' + $(this).attr('data-bs-dismiss');
        $(data).removeClass('active')
        $('.offcanvas-overlay').removeClass('active')
        $('body').removeClass('modal-open')
    })

    $('.slick').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        dotsClass: 'slider-dots',
        fade: true,
        swipeToSlide:true,
        autoplaySpeed: 5000,
        arrows: false,
    })

    $('.slider').on('afterChange', function (event, slick, currentSlide) {
        const slide = slick.$slides[currentSlide];
        $(slide).find('.slider-content').addClass('active');
        $(slide).siblings().find('.slider-content').removeClass('active')
    })

    $('.slick-feedback').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 2000,
        prevArrow: `<div class="feedback-prev">
        <svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 30.0571L3 16.0571L17 2.05713" stroke-width="4" stroke-linecap="round"/>
        </svg>
        </div>`,
        nextArrow: `<div class="feedback-next">
        <svg width="19" height="33" viewBox="0 0 19 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2.05713L16 16.0571L2 30.0571" stroke-width="4" stroke-linecap="round"/>
        </svg>
        </div>`,
    });

    $(window).on('scroll', function() {
        const scrollPosition = $(this).scrollTop();
        const elementPosition = $('.testimonial').offset().top;
        console.log(scrollPosition);
        if (scrollPosition >= elementPosition - 100) {
            const items = $('.testimonial').find('.testi-item');
            $(items).each(function () {
                if ($(this).hasClass('preMoveLeft')) {
                    $(this).removeClass('preMoveLeft')
                }

                if ($(this).hasClass('preMoveRight')) {
                    $(this).removeClass('preMoveRight')
                }
            })
        }
    });
})
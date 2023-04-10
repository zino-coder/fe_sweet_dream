$(document).ready(function () {
    $('[data-bs-toggle="offcanvas"]').on('click', function () {
        const offcanvas = $(this).attr('data-bs-target')
        $('.offcanvas-overlay').addClass('active')
        $(offcanvas).addClass('active')
    })

    $('.offcanvas-overlay').click(function () {
        $('.offcanvas').removeClass('active')
        $(this).removeClass('active')
    })

    $('.btn-close').click(function () {
        const data = '.' + $(this).attr('data-bs-dismiss');
        $(data).removeClass('active')
        $('.offcanvas-overlay').addClass('active')
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
    })

    $('.slider').on('afterChange', function (event, slick, currentSlide) {
        const slide = slick.$slides[currentSlide];
        $(slide).find('.slider-content').addClass('active');
        $(slide).siblings().find('slider-content').removeClass('active')
    })
})
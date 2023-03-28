$(function(){
    // Owl Carousel
    let owl = $('.owl-carousel');
    let btnPrev = $('.custom-owl-prev');
    let btnNext = $('.custom-owl-next');

    owl.owlCarousel({
        center: true,
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1.35,
                margin: 0
            },
            575: {
                items: 1.35,
                margin: 12
            },
            1200: {
                items: 3,
                margin: 42
            },
            1441: {
                items: 3,
                margin: 85
            }
        }
    });

    btnPrev.on('click', function(){
        owl.trigger('prev.owl.carousel');
    });

    btnNext.on('click', function(){
        owl.trigger('next.owl.carousel');
    });
});
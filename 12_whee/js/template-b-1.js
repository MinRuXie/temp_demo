$(function(){
    // Owl Carousel
    let owl = $('.owl-carousel');
    let btnPrev = $('.custom-owl-prev');
    let btnNext = $('.custom-owl-next');

    owl.owlCarousel({
        center: true,
        loop: true,
        margin: 16,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1.2
            },
            575: {
                items: 1.75
            },
            1200: {
                items: 1.75
            },
            1441: {
                items: 1.75
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
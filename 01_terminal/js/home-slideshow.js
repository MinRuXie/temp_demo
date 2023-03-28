$(function() {
    // Owl Carousel
    let $owl = $('#owl-train, #owl-flight, #owl-bistro');

    // Slideshow Nav
    let $btnPrev = $('.custom-owl-prev');
    let $btnNext = $('.custom-owl-next');

    $owl.each(function(){
        $(this).owlCarousel({
            center: true,
            loop: true,
            margin: 60,
            nav: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1,
                    dots: true
                },
                1200: {
                    items: 2.27,
                    dots: false
                },
                1441: {
                    items: 2.27,
                    dots: false
                }
            }
        });
    });

    // Custom Prev Button
    $btnPrev.on('click', function(){
        $(this).closest('.content-inner--slideshow-cover').find('.owl-carousel').trigger('prev.owl.carousel');
    });

    // Custom Next Button
    $btnNext.on('click', function(){
        $(this).closest('.content-inner--slideshow-cover').find('.owl-carousel').trigger('next.owl.carousel');
    });
});
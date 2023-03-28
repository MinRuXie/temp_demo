// preload images
function preloadImg(image) {
    let img = new Image();
    img.src = image;
}

let pics = [
    // General
    'images/general/arrow_1.svg',
    'images/general/arrow_2.svg',
    'images/general/arrow_3.svg',
    'images/general/logo.svg',
    'images/general/logo_hover.svg',
    'images/general/arrow_1.svg',
    'images/general/arrow_2.svg',
    'images/general/arrow_3.svg',
    'images/general/trial_run.png',
    'images/general/trial_run_mobile.png',
    'images/general/trial_run_mobile@2x.png',

    // Home
    'images/home/about.png',
    'images/home/bg_about.jpg',
    'images/home/bg_booth.jpg',
    'images/home/bg_fooddrink.jpg',
    'images/home/bg_minigolf.jpg',
    'images/home/booth.png',
    'images/home/fooddrink.png',
    'images/home/kv_1.png',
    'images/home/kv_2.jpg',
    'images/home/minigolf.png',

    // Mini Golf
    'images/minigolf/bg_intro.jpg',
    'images/minigolf/intro.png',
    'images/minigolf/rule_01.png',
    'images/minigolf/rule_02.png',
    'images/minigolf/rule_03.png',
    'images/minigolf/rule_04.png',
    'images/minigolf/service.png',
    'images/minigolf/booking_01.png',
    'images/minigolf/booking_02.png',
    'images/minigolf/booking_03.png',
    'images/minigolf/photonews_01.jpg',
    'images/minigolf/photonews_02.jpg',
    'images/minigolf/photonews_03.jpg',
    'images/minigolf/photonews_04.jpg',
    'images/minigolf/photonews_05.jpg',
    'images/minigolf/photonews_06.jpg',

    // Food & Drink
    'images/fooddrink/bg_introbanner.jpg',
    'images/fooddrink/bg_mainintro.jpg',
    'images/fooddrink/booking.png',
    'images/fooddrink/brandsinfo.png',
    'images/fooddrink/mainintro.png',
    'images/fooddrink/foodstandsintro_01.png',
    'images/fooddrink/foodstandsintro_02.png',
    'images/fooddrink/foodstandsintro_03.png',
    'images/fooddrink/foodstandsintro_04.png',
    'images/fooddrink/foodstandsintro_05.png',

    // Boothh
    'images/booth/bg_intro.jpg',
    'images/booth/booking_01.png',
    'images/booth/booking_02.png',
    'images/booth/booking_03.png',
    'images/booth/intro.png',
    'images/booth/service_01.png',
    'images/booth/service_02.png',
    'images/booth/service_03.png',
    'images/booth/service_04.png',
    'images/booth/space_01.jpg',
    'images/booth/space_02.jpg',
    'images/booth/space_03.jpg',
    'images/booth/space_04.jpg',
    'images/booth/space_05.jpg',
    'images/booth/space_06.jpg',

    // Booking
    'images/booking/bg_booking.jpg',
    'images/booking/booking_failed.png',
    'images/booking/booking_success.png',
];

for(let i=0;i<pics.length;i++){
    preloadImg(pics[i]);
}


$(function(){
    let $win = $(window);
    let $nav_ctr_btn = $('#js-nav-ctrl-btn');
    let $nav_dashboard = $('.nav-menu-dashboard');
    let $index_effect_elements = $('.index-effect');
    let $index_effect_target = $('#home-intro');
    let scrollTop = $win.scrollTop();

    // Custom funtion
    function indexMenuEffect(scrollTop) {
        if(scrollTop >= $index_effect_target.height() ) {
            $index_effect_elements.addClass('show');
        } else {
            if($nav_dashboard.hasClass('show')) {
                $index_effect_elements.addClass('show');
            } else {
                $index_effect_elements.removeClass('show');
            }         
        }
    }

    // Event binding
    $nav_ctr_btn.on('click', function(){
        $nav_ctr_btn.toggleClass('closed');
        $nav_dashboard.toggleClass('show');
        indexMenuEffect(scrollTop); 
    });

    $win.on('scroll', function() {
        scrollTop = $win.scrollTop();
        indexMenuEffect(scrollTop);

        /* vh */
        // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
        let vh = window.innerHeight * 0.01;
        // Then we set the value in the --vh custom property to the root of the document
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    // anchor smooth
    $('a[href*=\\#]:not(.nav-link)').click(function() {
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
    });

    // initial
    indexMenuEffect(scrollTop);

    /* Loading動畫 */
    document.body.classList.add('render');
    setTimeout(function(){
        // Image Loading
        imagesLoaded(document.body, function(){
            document.body.classList.remove('loading');
        })
    }, 1000);
});
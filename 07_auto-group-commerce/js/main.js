$(function(){
    let init_scrolled = $(window).scrollTop();
    let $nav = $('#nav');
    let $nav_height = $nav.innerHeight();
    let $mobile_menu_ctr_btn = $('#js-menu-btn');
    let $mobile_menu = $('#js-mobile-menu-wrap');
    let $form_wrap = $('#js-form-wrap');
    let $form_next_btn = $('#js-form-next-btn');
    
    /* mobile - close menu */
    function forceClosedMobileMenu() {
        $mobile_menu_ctr_btn.removeClass('active');
        $mobile_menu.removeClass('active');
    }

    /* nav style */
    function changeNavStyle(scrolled) {
        if ( scrolled <= 0 ) {
            $nav.find('.pc-nav-wrap').addClass('top');
        } else {
            $nav.find('.pc-nav-wrap').removeClass('top');
        }
    }

    /* smooth anchor */
    $('a[href*=\\#]').click(function() {
        var target = $(this.hash);

        $('html, body').animate({
            scrollTop: target.offset().top - $nav_height
        }, 0, 'linear');
        return false;
    });

    /* contact - next page */
    $form_next_btn.on('click', function(){
        let current_item = $form_wrap.find('.form-page-wrap').filter('.active');
        current_item.removeClass('active');
        current_item.next('.form-page-wrap').addClass('active');
    });

    /* mobile menu - open / closed */
    $mobile_menu_ctr_btn.click(function() {
        $(this).toggleClass('active');
        $mobile_menu.toggleClass('active');
    });

    /* mobile menu - click menu item */
    $('.mobile-content-wrap a[href*=\\#]').click(function() {
        forceClosedMobileMenu();
    });

    /* pc - nav style */
    $(window).scroll(function (event) {
        let scrolled = $(this).scrollTop();
        
        changeNavStyle(scrolled);
    });

    /* init */
    changeNavStyle(init_scrolled);

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 30,
        dots: false,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            991:{
                items: 6
            }
        }
    })

});
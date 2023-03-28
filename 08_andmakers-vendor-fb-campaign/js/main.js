let sec = 5;
function setTimeOutModal() {
    let modal_left = $('.modal-left');
    
    if (sec < 0) {
        clearInterval(timer);
    } else {
        modal_left.empty();
        modal_left.append(`
                <div class="modal-left-wrap">
                    <h2>Thanks for<br>submitting the form!</h2>
                    <p>You'll be automatically redirected to the AndMakers website in ${sec} seconds.</p>
                </div>
            `);
    }
    sec--;

    timer = setTimeout(function(){
        setTimeOutModal();
    }, 1000);
}

$(function(){
    let $win = $(window);
    let $nav = $('#nav'); // menu
    let $nav_height = $nav.innerHeight(); // menu
    let $mobile_ctr_btn = $('#js-mobile-ctr-btn'); // menu
    let $mobile_menu = $('#js-mobile-menu'); // menu

    let $submited_modal = $('#exampleModal');
    let $submit_btn = $('#js-submit-btn'); // contact form submit button
    let $hero_submit_btn = $('#js-hero-submit-btn'); // hero contact form submit button

    let $input_email = $('#inputEmail');
    let $input_phone = $('#phone');
    let $hero_input_email = $('#hero-inputEmail');
    let $hero_input_phone = $('#hero-phone');

    let email_rule = /^(\w|\.|\-)+@(\w|\.|\-)+\.(\w|\.|\-)+$/;
    let phone_rule = /^(\d|\-|\*|\#|\(|\))+$/;

    /* faq card active style */
    let $array_faq_cards = $('#faq-accordion .card');
    $array_faq_cards.each(function(index){
        let $item_wrap = $(this);
        let $item_header = $(this).find('.card-header button');

        $item_header.on('click', function() {
            if ( $item_wrap.hasClass('active') ) {
                $array_faq_cards.removeClass('active');
            } else {
                $array_faq_cards.removeClass('active');
                $item_wrap.addClass('active');
            }
        });
    });

    /* advantages mobile card active style */
    let $array_advantages_mobile_cards = $('#advantages-accordion-mobile .card');
    $array_advantages_mobile_cards.each(function(index){
        let $item_wrap = $(this);
        let $item_header = $(this).find('.card-header button');

        $item_header.on('click', function() {
            if ( $item_wrap.hasClass('active') ) {
                $array_advantages_mobile_cards.removeClass('active');
            } else {
                $array_advantages_mobile_cards.removeClass('active');
                $item_wrap.addClass('active');
            }
        });
    });

    /* data verification */
    function verifyData($target, rule) {
        let flag = rule.test($target.val());

        if ( flag ) {
            $target.removeClass('invalid');
        } else {
            $target.addClass('invalid');
        }
        return flag;
    } 

    /* pc - menu top effect */
    function navTopEffect() {
        let scrollTop = $win.scrollTop();

        if(scrollTop <= 0) {
            $nav.addClass('top');
        } else {
            $nav.removeClass('top');
        }
    }

    /* pc - menu anchor effect */
    function navAnchorEffect() {
        let scrollTop = $win.scrollTop();

        // { section_order: [section_id, section_offsetTop, section_height] }
        let sectionIds = {};
        $("section").each(function (index) {
            sectionIds[index] = [$(this).attr("id"), $(this).offset().top, $(this).innerHeight()];
        });

        for (key in sectionIds) {
            if ( ( scrollTop >= (sectionIds[key][1] - $nav_height - 5 ) ) && (scrollTop < ( sectionIds[key][1] + sectionIds[key][2] ) ) ) {
                let active_item = $("#js-pc-nav a[data-id=" + sectionIds[key][0] + "]");

                $("#js-pc-nav a").removeClass('active');
                if (active_item.length != 0) {
                    active_item.addClass('active');
                }
            }
        }
    }

    /* mobile - closed menu */
    function forceClosedMobileMenu() {
        $mobile_ctr_btn.removeClass('active');
        $mobile_menu.removeClass('active');
    }
    
    /* mobile - click menu item */
    $('#js-mobile-menu a[href*=\\#]').click(function() {
        forceClosedMobileMenu();
    });

    /* mobile - menu control */
    $mobile_ctr_btn.click(function() {
        $(this).toggleClass('active');
        $mobile_menu.toggleClass('active');
    });

    /* hero contact form - submit button */
    $hero_submit_btn.click(function() {
        let email_flag = verifyData($hero_input_email, email_rule);
        let phone_flag = verifyData($hero_input_phone, phone_rule);

        if ( email_flag && phone_flag ) {
            $submited_modal.modal('show');
            setTimeOutModal();
        }
    });
    
    /* contact form - submit button */
    $submit_btn.click(function() {
        let email_flag = verifyData($input_email, email_rule);
        let phone_flag = verifyData($input_phone, phone_rule);

        if ( email_flag && phone_flag ) {
            $submited_modal.modal('show');
            setTimeOutModal();
        }
    });

    /* anchor link smooth scroll */
    $('a[href*=\\#]:not([class^="carousel-control-"])').click(function() {
        let target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top - $nav_height
        }, 1000);
        return false;
    });

    /* scroll event */
    $win.scroll(function (event) {
        navTopEffect();
        navAnchorEffect();
    });

    /* init */
    navTopEffect();

    let input = document.querySelector("#phone");
    window.intlTelInput(input, {
        utilsScript: "js/plugins/utils.js",
    });
    let input2 = document.querySelector("#hero-phone");
    window.intlTelInput(input2, {
        utilsScript: "js/plugins/utils.js",
    });


    $('#carouselClients').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        // animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        margin: 0,
        nav: true,
        dots: true
    });

    $('#carouselPartnership').owlCarousel({
        items: 6,
        autoplay: true,
        autoplayHoverPause: true,
        loop: true,
        animateOut: true,
        margin: 30,
        nav: true,
        dots: false
    });
});
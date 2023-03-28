$(function(){
    let $window = $(window);
    let win_width = $window.outerWidth();
    let scrollTop = $window.scrollTop();

    // owl carousel (switch item)
    let $process_owl_carousel = $('#js-process-owl-carousel');

    // owl carousel init
    $process_owl_carousel.owlCarousel({
        loop: false,
        center: true,
        items: 1,
        margin: 15,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1.2
            },
            1199.98:{
                items: 1
            }
        }
    });

    // nav
    let nav_pc_menu_height = $('#js-pc-nav').outerHeight();
    
    // sticky bounds
    let $pc_sticky_bounds = $('.js-pc-sticky-bounds');
    let pc_sticky_bounds_height = 0;
    let sticky_start_step_1_point = 0;
    let sticky_start_step_2_point = 0;
    let sticky_end_point = 0;
    
    // sticky item
    let $pc_sticky_wrap = $('.js-pc-sticky-effect');

    // switch bounds
    let $pc_slide_bounds = $('.js-pc-switch-slide');
    let pc_slide_bounds_height = 0;
    let slide_start_step_1_point = 0;
    let slide_start_step_2_point = 0;
    let slide_end_point = 0;


    /* init variable */
    function initVariable() {
        // owl Carousel
        let $owl = $('#js-process-owl-carousel');
        
        // owl Carousel - destroy
        $owl.trigger('destroy.owl.carousel');
        $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
        
        // owl Carousel - reinit
        $owl.owlCarousel({
            loop: false,
            center: true,
            items: 1,
            margin: 15,
            nav: false,
            dots: true,
            responsive:{
                0:{
                    items: 1.2
                },
                1199.98:{
                    items: 1
                }
            }
        });

        // sticky bounds
        pc_sticky_bounds_height = $pc_sticky_bounds.outerHeight();
        sticky_start_step_1_point = $pc_sticky_bounds.offset().top;
        sticky_start_step_2_point = sticky_start_step_1_point + pc_sticky_bounds_height - $process_owl_carousel.outerHeight() - 180;
        sticky_end_point = sticky_start_step_1_point + pc_sticky_bounds_height * 1.5;

        // switch bounds
        pc_slide_bounds_height = $pc_slide_bounds.outerHeight();
        slide_start_step_1_point = $pc_slide_bounds.offset().top;
        slide_start_step_2_point = slide_start_step_1_point + pc_slide_bounds_height / 6;
        slide_end_point = slide_start_step_1_point + pc_slide_bounds_height;
    }

    /* pc - step sticky effect */
    function stepStickyEffect(scrollTop) {
        // sticky step 1
        if ( (scrollTop + nav_pc_menu_height > sticky_start_step_1_point - 100) && (scrollTop < sticky_start_step_2_point) ) {
            $pc_sticky_wrap.addClass('stickying-effect');
            $pc_sticky_wrap.removeClass('stickyed-effect');
        // sticky step 2
        } else if ( (scrollTop > sticky_start_step_2_point) && (scrollTop < sticky_end_point) ) {
            $pc_sticky_wrap.addClass('stickyed-effect');
            $pc_sticky_wrap.removeClass('stickying-effect');
        // sticky step 0
        } else {
            $pc_sticky_wrap.removeClass('stickyed-effect');
            $pc_sticky_wrap.removeClass('stickying-effect');
        }
    }

    /* pc - step switch effect */
    function stepSwitchEffect(scrollTop) {
        // switch step 1
        if ( (scrollTop + nav_pc_menu_height > slide_start_step_1_point - 100) && (scrollTop < slide_start_step_2_point) ) {
            $process_owl_carousel.trigger('to.owl.carousel', [1]);
        // switch step 2
        } else if ( (scrollTop > slide_start_step_2_point) && (scrollTop < slide_end_point) ) {
            $process_owl_carousel.trigger('to.owl.carousel', [2]);
        // switch step 0
        } else {
            $process_owl_carousel.trigger('to.owl.carousel', [0]);
        }
    }

    /* scroll down */
    $window.scroll(function (event) {
        if ( win_width > 1199.98 ) {
            scrollTop = $window.scrollTop();

            // pc - step sticky effect
            stepStickyEffect(scrollTop);

            // pc - step switch effect
            stepSwitchEffect(scrollTop);
        }
    });

    /* resize */
    $window.resize(function (event) {
        win_width = $window.outerWidth();

        if ( win_width > 1199.98 ) {
            // init variable
            initVariable();

            // pc - step sticky effect
            stepStickyEffect(scrollTop);

            // pc - step switch effect
            stepSwitchEffect(scrollTop);
        }
    });

    
    /* init */
    if ( win_width > 1199.98 ) {
        // init variable
        initVariable();

        // pc - step sticky effect
        stepStickyEffect(scrollTop);

        // pc - step switch effect
        stepSwitchEffect(scrollTop);
    }
});
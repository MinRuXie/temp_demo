// Get Data - partner
fetch('../03_andmakers2.0/data/partner.json').then(function (response) {
    return response.json();
}).then(function (data) {
    let partner_data_object = data;

    var retail = new Vue({
        el: '#retail',
        data: {
            retails: partner_data_object
        }
    })
}).catch(function (err) {
    console.warn('partner data went wrong.', err);
});

// Get Data - faqs-featured
fetch('../03_andmakers2.0/data/faqs-featured.json').then(function (response) {
    return response.json();
}).then(function (data) {
    let faq_data_object = data;
    
    var faq = new Vue({
        el: '#faq',
        data: {
            faqs: faq_data_object
        },
        mounted: function () {
            // accordion - active shadow effect
            let $accordion_shadow_effect_wrap = $('.js-accordion-shadow-effect');
            let $accordion_shadow_effect_wrap_item_btn = $accordion_shadow_effect_wrap.find('.accordion-button');

            /* accordion - active shadow effect */
            $accordion_shadow_effect_wrap_item_btn.click(function() {
                $(this).parents('.js-accordion-shadow-effect').find('.accordion-item').removeClass('active');

                if ( !$(this).hasClass('collapsed') ) {
                    $(this).parents('.accordion-item').addClass('active');
                }
            });
        }
    })
}).catch(function (err) {
    console.warn('faq data went wrong.', err);
});

$(function(){
    let $win = $(window);

    // nav
    let $nav_pc = $('#js-pc-nav');

    /* pc - menu top effect */
    function navTopEffect() {
        let scrollTop = $win.scrollTop();

        if(scrollTop <= 0) {
            $nav_pc.addClass('hero-style');
        } else {
            $nav_pc.removeClass('hero-style');
        }
    }

    /* scroll event */
    $win.scroll(function (event) {
        navTopEffect();
    });


    /* init */
    navTopEffect();
});
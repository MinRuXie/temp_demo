// Get Data - FAQs
fetch('data/faqs.json').then(function (response) {
    return response.json();
}).then(function (data) {
    let faq_data_object = data;

    var faq = new Vue({
        el: '#faq',
        data: {
            faqs: faq_data_object
        },
        mounted: function () {
            // tabs & nav - faqs
            let $tab_nav_wrap = $('#js-faq-tab-nav');
            let $tabs_nav_items = $tab_nav_wrap.find('.nav-link');
            let $tab_content_wrap = $('#js-faq-tab-content');

            // accordion - active shadow effect
            let $accordion_shadow_effect_wrap = $('.js-accordion-shadow-effect');
            let $accordion_shadow_effect_wrap_item_btn = $accordion_shadow_effect_wrap.find('.accordion-button');


            /* tabs & nav - faqs content switch */
            $tabs_nav_items.on('click', function(){
                let tab_nav_id = $(this).parents('.faq-tab-nav-wrap').attr('id');

                // tab - nav
                $tab_nav_wrap.find('.nav-item').removeClass('active');
                $(this).parents('.nav-item').addClass('active');
                
                // tab - content
                $tab_content_wrap.find(`.faq-tab-content-wrap`).removeClass('show');
                $tab_content_wrap.find(`#${tab_nav_id}Content`).addClass('show');
            });
            
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
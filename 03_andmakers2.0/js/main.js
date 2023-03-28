$(function(){
    // nav
    let $nav_mobile_ctr_btn = $('#js-mobile-ctr-btn');
    let $nav_mobile_menu = $('#js-mobile-menu');

    // accordion - active shadow effect
    let $accordion_shadow_effect_wrap = $('.js-accordion-shadow-effect');
    let $accordion_shadow_effect_wrap_item_btn = $accordion_shadow_effect_wrap.find('.accordion-button');

    // accordion - readmore
    let $accordion_readmore_wrap = $('.js-accordion-readmore');
    let $accordion_readmore_open_btn = $accordion_readmore_wrap.find('.accordion-open-btn');
    let $accordion_readmore_closed_btn = $accordion_readmore_wrap.find('.accordion-closed-btn');

    // Video
    let $video_play_btn = $('.js-video-btn');
    let $video_modal = $('.js-video-modal');
    let $video_modal_closed_btn = $video_modal.find('.btn-close');
    let video_id;
    let $video_iframe;
    

    /* mobile - closed menu */
    function forceClosedMobileMenu() {
        $nav_mobile_ctr_btn.removeClass('active');
        $nav_mobile_menu.removeClass('active');
    }
    
    /* mobile - click menu item */
    $('#js-mobile-menu a[href*=\\#]').click(function() {
        forceClosedMobileMenu();
    });

    /* mobile - menu control */
    $nav_mobile_ctr_btn.click(function() {
        $(this).toggleClass('active');
        $nav_mobile_menu.toggleClass('active');
    });

    /* accordion - active shadow effect */
    $accordion_shadow_effect_wrap_item_btn.click(function() {
        $(this).parents('.js-accordion-shadow-effect').find('.accordion-item').removeClass('active');

        if ( !$(this).hasClass('collapsed') ) {
            $(this).parents('.accordion-item').addClass('active');
        }
    });

    /* accordion - readmore button */
    $accordion_readmore_open_btn.click(function() {
        $accordion_readmore_wrap.addClass('show');
    });
    $accordion_readmore_closed_btn.click(function() {
        $accordion_readmore_wrap.removeClass('show');
    });

    /* video - Loading Video */
    $video_play_btn.on('click', function(){
        // current video id
        video_id = $(this).attr('data-bs-target');
        video_id = video_id.substr(1, video_id.length - 1); // remove #
        
        // current video iframe
        $video_iframe = $video_modal.filter(`#${video_id}`).find('iframe');
        $video_iframe.attr('src', $video_iframe.attr('data-src'));
    });

    /* video - Init Video in modal */
    $video_modal_closed_btn.on('click', function(){
        $video_iframe.attr('src', '');
    });
});
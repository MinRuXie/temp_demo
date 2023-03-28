// Get Data - catalog
fetch('../03_andmakers2.0/data/catalog.json').then(function (response) {
    return response.json();
}).then(function (data) {
    let catalog_data_object = data;
    
    var catalog = new Vue({
        el: '#catalog',
        data: {
            catalogs: catalog_data_object,
            current_category_id: 0,
            current_product_id: 0
        },
        methods: {
            switchData: function (category_id, product_id) {
                this.current_category_id = category_id;
                this.current_product_id = product_id;
            }
        },
        mounted: function () {
            let $window = $(window);
            let scrollTop = $window.scrollTop();
            
            // nav
            let nav_mobile_menu_height = $('#js-mobile-nav').outerHeight();
            
            // tab nav sticky
            let $tab_mobile_sticky_wrap = $('.js-tab-mobile-sticky-effect');
            let tab_nav_height = $tab_mobile_sticky_wrap.find('.nav-tabs').outerHeight();
            let tab_nav_sticky_start_point = $tab_mobile_sticky_wrap.offset().top;
            let tab_nav_sticky_end_point = $('.js-tab-mobile-sticky-effect-end-targrt').offset().top;


            /* tab nav sticky effect */
            function tabNavStickyEffect(scrollTop) {
                tab_nav_sticky_end_point = $('.js-tab-mobile-sticky-effect-end-targrt').offset().top;
                let target_start_flag = (scrollTop + nav_mobile_menu_height) > tab_nav_sticky_start_point + 10;
                let target_end_flag = (scrollTop + nav_mobile_menu_height) < (tab_nav_sticky_end_point - tab_nav_height * 1.5);
                
                if( target_start_flag && target_end_flag ) {
                    $tab_mobile_sticky_wrap.addClass('sticky-effect');
                } else {
                    $tab_mobile_sticky_wrap.removeClass('sticky-effect');
                }
            }

            /* scroll down */
            $window.scroll(function (event) {
                scrollTop = $window.scrollTop();

                // tab nav sticky effect
                tabNavStickyEffect(scrollTop);
            });


            /* init */

            // tab nav sticky effect
            tabNavStickyEffect(scrollTop);
        }
    })
}).catch(function (err) {
    console.warn('catalog data went wrong.', err);
});

// Get Data - review
fetch('../03_andmakers2.0/data/review.json').then(function (response) {
    return response.json();
}).then(function (data) {
    let review_data_object = data;
    
    var review = new Vue({
        el: '#review',
        data: {
            reviews: review_data_object,
            current_review_id: 0
        },
        methods: {
            switchData: function (review_id) {
                this.current_review_id = review_id;
            }
        }
    })
}).catch(function (err) {
    console.warn('review data went wrong.', err);
});
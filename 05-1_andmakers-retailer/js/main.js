let sec = 5;
function setTimeOutModal() {
    let modal_left = $('#submitModal .modal-left');
    
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

/* preload images */
function preloadImg(image) {
    let img = new Image();
    img.src = image;
}

fetch('../data/hero.json').then(function (response) {
    return response.json();
}).then(function (data) {
    let hero_data_object = data;

    // preload hero images
    for(let i=0 ; i < hero_data_object.length ; i++) {
        preloadImg(`../images/${hero_data_object[i].path}${hero_data_object[i].thumbnail}`);
        preloadImg(`../images/${hero_data_object[i].path}${hero_data_object[i].lifestyle}`);
    }

    var hero = new Vue({
        el: '#hero',
        data: {
            heros: hero_data_object
        },
        methods: {
            switchCategory: function (category) {
                $(`#pills-${category}-tab`).click();
            }
        }
    })
}).catch(function (err) {
    console.warn('reviews data went wrong.', err);
});

fetch('../data/categories.json').then(function (response) {
    return response.json();
}).then(function (data) {
    let categories_data_object = data;

    // preload categories modal images
    for(let i=0 ; i < categories_data_object.length ; i++) {
        for(let j=0 ; j < categories_data_object[i].products.length ; j++) {
            let obj = categories_data_object[i].products[j];
            preloadImg(`../images/${obj.path}${obj.thumbnail}`);

            for(let k=0 ; k < obj.lifestyles.length ; k++) {
                preloadImg(`../images/${obj.path}${obj.lifestyles[k]}`);
            }
        }
    }

    var categories = new Vue({
        el: '#categories',
        data: {
            categories: categories_data_object,
            current_category_index: 0,
            current_product_index: 0
        },
        methods: {
            switchProduct: function (category_index, product_index) {
                this.current_category_index = category_index;
                this.current_product_index = product_index;

                $('#carouselProducts').find('.carousel-item').removeClass('active');
                $('#carouselProducts').find('.carousel-item').first().addClass('active');
                $('#carouselProducts').find('.carousel-indicators').find('button').removeClass('active');
                $('#carouselProducts').find('.carousel-indicators').find('button').first().addClass('active');
            }
        },
        mounted: function () {
            let $nav_height = $('#nav').outerHeight(); // menu
            let $category_tab_nav = $('#pills-tab');
            let category_nav_offset_top = $category_tab_nav.offset().top;
            let $category_tab_content = $('#pills-tabContent');
            let feedback_offset_top = $('#feedback').offset().top;

            $(window).scroll(function (event) {
                let scrollTop = $(window).scrollTop();

                if( (scrollTop + $nav_height > category_nav_offset_top + 25) && (scrollTop + $nav_height < feedback_offset_top -51) ) {
                    $category_tab_nav.addClass('sticky-effect');
                    $category_tab_content.addClass('sticky-effect');
                } else {
                    $category_tab_nav.removeClass('sticky-effect');
                    $category_tab_content.removeClass('sticky-effect');
                }
            });
        }
    })
}).catch(function (err) {
    console.warn('categories data went wrong.', err);
});

fetch('../data/reviews.json').then(function (response) {
    return response.json();
}).then(function (data) {
    let reviews_data_object = data;

    // preload categories modal images
    for(let i=0 ; i < reviews_data_object.length ; i++) {
        preloadImg(`../images/${reviews_data_object[i].path}${reviews_data_object[i].thumbnail}`);
        preloadImg(`../images/${reviews_data_object[i].path}${reviews_data_object[i].lifestyle}`);
    }

    var feedback = new Vue({
        el: '#feedback',
        data: {
            reviews: reviews_data_object,
            current_index: 0
        },
        methods: {
            switchProduct: function (index) {
                this.current_index = index;
            }
        }
    })
}).catch(function (err) {
    console.warn('reviews data went wrong.', err);
});


$(function(){
    let $win = $(window);
    let $nav = $('#nav'); // menu
    let $nav_height = $nav.outerHeight(); // menu
    let $mobile_ctr_btn = $('#js-mobile-ctr-btn'); // menu
    let $mobile_menu = $('#js-mobile-menu'); // menu

    let $submited_modal = $('#submitModal');
    let $submit_btn = $('#js-submit-btn'); // contact form submit button

    let $checkbox_title = $('#js-checkbox-title');  // contact form accordion
    let $checkbox_wrap = $('#js-checkbox-content');
    let $checkbox_input = $checkbox_wrap.find('input[type="checkbox"]');

    let $input_email = $('#inputEmail');
    let $input_phone = $('#phone');
    let email_rule = /^(\w|\.|\-)+@(\w|\.|\-)+\.(\w|\.|\-)+$/;
    let phone_rule = /^(\d|\-|\*|\#|\(|\))+$/;

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

    /* contact form - submit button */
    $submit_btn.click(function() {
        let email_flag = verifyData($input_email, email_rule);
        let phone_flag = verifyData($input_phone, phone_rule);

        if ( email_flag && phone_flag ) {
            $submited_modal.modal('show');
            setTimeOutModal();
        }
    });

    /* contact form - checkbox checked count */
    $checkbox_input.on('change', function(){
        let count = $checkbox_wrap.find('input[type="checkbox"]').filter(':checked').length;
        
        if ( count > 0 ) {
            $checkbox_title.text(`${count} selected`);
        } else {
            $checkbox_title.text('Select');
        } 
    });

    /* anchor link smooth scroll */
    $('a[href*=\\#]:not([class^="carousel-control-"])').click(function() {
        let target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top - $nav_height
        }, 0);
        return false;
    });

    /* scroll event */
    $win.scroll(function (event) {
        navTopEffect();
        navAnchorEffect();
    });

    /* init */
    navTopEffect();

    // phone
    let input = document.querySelector("#phone");
    window.intlTelInput(input, {
        utilsScript: "js/plugins/utils.js",
    });
});
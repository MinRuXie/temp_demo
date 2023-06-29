$(function(){
    let $nav = $('#nav'); // 選單
    let $ctr_btn = $('#nav #ctr-btn'); // 選單控制按鈕
    let $mobile_menu = $('#nav .mobile-menu-wrap'); // 手機版選單
    let $faq_header = $('.faq-header');

    
    /* FAQ */
    $faq_header.on('click keypress', function(e) {
        console.log(e.key)
        if(e.type === 'keypress' && e.key !== "Enter") return;

        $(this).toggleClass('active');
        $(this).siblings('.faq-body').toggleClass('active');
    });
    

    /* 控制字體大小 */
    $('.js-font-size-btn').on('click', function(){
        // 修改按鈕樣式
        $('.js-font-size-btn').removeClass('active');
        $(this).addClass('active');

        // 修改頁面文字基準大小
        let size = $(this).attr('data-size');
        document.documentElement.style.setProperty('--custom-font-size', size);

        // 修改hero區塊的margin-top
        document.documentElement.style.setProperty('--nav-height', `${$nav.height()}px`);
    });

    /* 平滑錨點 */
    $('a[href*=\\#].anchor').click(function() {
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top - $nav.height()
        }, 1000);
        return false;
    });

    /* 區塊偵測改變錨點樣式 */
    var sectionIds = {}; // key: section_id, value: 此 section 距離頂端的高度
    $("section").each(function () {
        var $this = $(this);
        sectionIds[$this.attr("id")] = $this.first().offset().top;
    });

    $(window).scroll(function (event) {
        let scrolled = $(this).scrollTop(); // 目前距離頂端的高度
        for (key in sectionIds) {
            // 目前捲軸距離頂端的高度 >= 某個 section 距離頂端的高度 - menu 高度和些微的誤差
            if (scrolled >= sectionIds[key] - $nav.height() - 5) {
                let active_item = $("#nav a[data-id=" + key + "]");
                // 檢查此區塊的 id 是否為錨點目標
                if (active_item.length != 0) {
                    $("#nav a").removeClass('active'); // 移除 menu 中所有的 active
                    active_item.addClass('active');
                }
            }
        }
    });

    /* 手機版選單控制 */
    $ctr_btn.click(function() {
        $(this).toggleClass('active');
        $mobile_menu.toggleClass('active');
    });

    /* 強制關閉手機選單 */
    function forceClosedMobileMenu() {
        $ctr_btn.removeClass('active');
        $mobile_menu.removeClass('active');
    }

    $('.mobile-wrap a[href*=\\#].anchor').click(function() {
        forceClosedMobileMenu()
    });
    /* Add Announcement Bar Start */
    $('.topbar .anchor').click(function() {
        forceClosedMobileMenu()
    });
    /* Add Announcement Bar End */
});
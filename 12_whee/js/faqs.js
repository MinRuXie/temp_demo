$(function(){
    let FaqCategory = $('.faqs-dropdown');
    let FaqOption = $('#faqsTab .nav-link');
    let FaqOptionValue = '';
    let SwitchTabLink = $('.switch-tab');

    /* switch to tab */
    let current_url_string = window.location.href;
    let current_url = new URL(current_url_string);
    let tab = current_url.searchParams.get("tab");
    $(`#${tab}`).click();
    

    FaqOption.on('click', function(){
        // 取出選項的值
        FaqOptionValue = $(this).html();

        // 顯示選項的值
        FaqCategory.html(FaqOptionValue);

        // 回到頁面頂端
        $('html, body').scrollTop(0);
    });

    SwitchTabLink.on('click', function(){
        // 取出切換頁籤的目標
        let $linkId = $(this).data('linkid');

        $('#' + $linkId + '-tab').click();
    });
});
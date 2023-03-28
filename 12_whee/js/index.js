$(function(){
    let $win = $(window);
    let flag = true;

    /* Trial Modal FadeIn */
    $win.on('scroll', function() {
        let scrollTop = $win.scrollTop();
        let homepageAbout = $('#home-about');
        let homepageAboutTop = homepageAbout.offset().top;

        if (scrollTop >= homepageAboutTop && flag) {
            $('#indexMessageDetail').modal('show');
            flag = false;
        }
    });
});

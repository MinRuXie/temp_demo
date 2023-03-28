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
    let $nav = $('#nav');
    let $nav_height = $nav.innerHeight();
    let submit_btn = $('#submit-btn');

    function navTopEffect() {
        let scrollTop = $win.scrollTop();

        if(scrollTop <= 0) {
            $nav.addClass('top');
        } else {
            $nav.removeClass('top');
        }
    }
    
    submit_btn.on('click', function(){
        setTimeOutModal();
    });

    $('a[href*=\\#]').click(function() {
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top - $nav_height
        }, 1000);
        return false;
    });


    $win.on('scroll', function() {
        navTopEffect();
    });

    /* init */
    navTopEffect();

    var input = document.querySelector("#phone");
    window.intlTelInput(input, {
        utilsScript: "js/plugins/utils.js",
    });
});
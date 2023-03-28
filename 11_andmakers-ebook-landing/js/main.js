let sec = 5;
function setTimeOutModal() {
    let modal_left = $('.modal-left');
    
    if (sec < 0) {
        clearInterval(timer);
    } else {
        modal_left.empty();
        modal_left.append(`
                <div class="success-wrap">
                    <h2>Thanks for<br>submitting the form!</h2>
                    <p>You'll get a download and be automatically redirected to the AndMakers website in ${sec} seconds.</p>
                    <p>Thank you for your interest!
                    Your download will start in 0 seconds. If your download did not start, please click here.
                    Want to know more about how we can help you succeed? Visit our website at <a href="#">https://www.andmakers.co</a></p>
                </div>
            `);
    }
    sec--;

    timer = setTimeout(function(){
        setTimeOutModal();
    }, 1000);
}


$(function(){
    let modal_left = $('.modal-left');
    let modal_right = $('.modal-right');
    let submit_btn = $('#submit-btn');
    
    submit_btn.on('click', function(){
        setTimeOutModal();
        modal_right.removeClass('cover');
        modal_right.addClass('success');
    });
});
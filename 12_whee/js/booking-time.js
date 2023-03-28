$( function() {
    let disabled_dates = ["2020-09-07", "2020-09-09"];

    $("#booking_date").datepicker({
        dateFormat: 'yy-mm-dd',
        beforeShowDay: function(date){
            var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
            return [ disabled_dates.indexOf(string) == -1 ]
        },
        beforeShow: function (input, inst) {
            let $top = $(this).offset().top + $(this).outerHeight() + 6;
            let $left = $(this).offset().left + $(this).outerWidth() - $('#ui-datepicker-div').outerWidth();
            
            setTimeout(function () {
                inst.dpDiv.css({
                    top: $top,
                    left: $left
                });
            }, 0);
        }
    });
});
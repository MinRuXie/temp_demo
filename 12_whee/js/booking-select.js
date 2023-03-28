$( function() {
   let $select = $('.select');
   
   $('.select-item').each(function(index){
        $(this).on('click', function(){
            $select.text($(this).text());
            $select.addClass('selected');
        });
    });
});
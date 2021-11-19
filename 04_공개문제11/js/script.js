$('.open').click(
    function(){
        $('.popup').fadeIn();
    }
);
$('.popup_body button').click(
    function(){
        $('.popup').fadeOut();
    }
);
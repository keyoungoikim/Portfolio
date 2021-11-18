$(".sns-tab li a").click(
    function(){
        $(".sns-tab li a").removeClass("on");
        $(this).addClass("on");
        let data = $(this).attr("data");
        $(".sns-gallery").hide();
        $("."+data).css("display","flex");
    }
);
$(".burger").click(
    function(){
        $(this).toggleClass("on");
        $(".burgernav").toggleClass("on");
    }
);
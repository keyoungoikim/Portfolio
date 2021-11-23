var i = 0;
var j = 1;
var imgUrl = [
    "img/slide1.png",
    "img/slide2.jpg",
    "img/slide3.jpg",
    "img/slide4.jpg",
    "img/slide5.jpg"
  ];
var slide1 = document.querySelector(".slideBg1");
var slide2 = document.querySelector(".slideBg2");
slide1.style.backgroundImage = "url(" + imgUrl[i] + ")";
slide2.style.backgroundImage = "url(" + imgUrl[j] + ")";



setInterval(go, 3000);
setTimeout(nextGo, 1000);

function nextGo(){
    setInterval(() => {

        if(j<imgUrl.length-1){
            j++;
        }else{
            j = 0;
        }

        slide2.style.backgroundImage = "url(" + imgUrl[j] + ")";

    }, 3000);
}

function go(){

    slide1.classList.add("on");

    if(i<imgUrl.length-1){
        i++;
    }else{
        i = 0;
    }
   
    slide1.style.backgroundImage = "url(" + imgUrl[i] + ")";


    setTimeout(function(){
        slide1.classList.remove("on");
    },2900);

}

$(".burger").click(
    function(){
        $(this).toggleClass("on");
        $(".burgergnb").toggleClass("on");
    }
);
var i = 0;
var j = 1;
var imgUrl = [
    "http://www.carriesoft.com/wp-content/uploads/2018/01/03.-%EC%9E%A5%EB%82%9C%EA%B0%90%EC%9D%B4%EB%9E%91-%EB%92%B9%EA%B5%B4%EB%92%B9%EA%B5%B4-1.jpg", //0
    "http://www.carriesoft.com/wp-content/uploads/2018/01/13.-%EA%B0%80%EC%9D%84-%EC%98%A4%ED%9B%84-1.jpg", //1
    "http://www.carriesoft.com/wp-content/uploads/2019/12/%EC%BB%A8%EC%85%89%EC%95%84%ED%8A%B8-78%ED%99%94-%EC%B6%94%EC%9A%B4-%EB%82%A0.png",   //2
    "http://www.carriesoft.com/wp-content/uploads/2020/12/super-kola_1222.png",   //3
    "http://www.carriesoft.com/wp-content/uploads/2020/12/%EC%BA%90%EB%A6%AC%EC%99%80-%EC%BD%9C%EB%9D%BC_%EA%B0%80%EB%A1%9C.jpg"
  ];
var slide1 = document.querySelector(".slideBg1");
var slide2 = document.querySelector(".slideBg2");
slide1.style.backgroundImage = "url(" + imgUrl[i] + ")";
slide2.style.backgroundImage = "url(" + imgUrl[j] + ")";



setInterval(go, 3000);
setTimeout(nextGo, 1000);

function nextGo(){
    setInterval(() => {

        if(j<imgUrl.length-1){ // i = 0, 1 , 2 일때 실행
            j++; // 1, 2, 3 까지 카운트
        }else{
            j = 0;
        }

        slide2.style.backgroundImage = "url(" + imgUrl[j] + ")";

    }, 3000);
}

function go(){

    slide1.classList.add("on");

    if(i<imgUrl.length-1){ // i = 0, 1 , 2 일때 실행
        i++; // 1, 2, 3 까지 카운트
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
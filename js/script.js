var targetMenu = document.querySelector(".targetMenu");
        var onTaget = document.querySelectorAll(".targetMenu ul li");
        var section = document.querySelectorAll("section");
        var sectionCounter = 0; 
        var offset = 0;
        var count=0;       
        document.addEventListener('wheel', scrollAni);
        window.addEventListener('load', activeMenu);
        targetMenu.addEventListener('click', gosection);

        function scrollAni(e){
            
            count++;
            var gosectioncount = count%7; // 스크롤을 5번 굴리면 이동.
            if(e.wheelDelta<0){
                if(gosectioncount == 0 && sectionCounter<5)sectionCounter++;
            }else{
                if(gosectioncount == 0 && sectionCounter>0)sectionCounter--;
            }
            
            offset = innerHeight*sectionCounter;

            $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");

            setTimeout(activeMenu,300);
            onTargetMenu();

            if(sectionCounter != 2 && tn == 1) tn = 0;
        }

        function activeMenu(){
            section.forEach(function(ele){ele.classList.remove("active");});
            section[sectionCounter].classList.add("active");
        }

        function gosection(e){ //menu 클릭시 이동.
            sectionCounter = Number(e.target.getAttribute("datanum"));
            offset = innerHeight*sectionCounter;
            $("html, body").stop().animate({scrollTop:offset},600,"easeInOutExpo");
            setTimeout(activeMenu,300);
            onTargetMenu();
        }

        function onTargetMenu(){
            onTaget.forEach(function(menu){
                menu.children[0].classList.remove("on");
            });
            onTaget[sectionCounter].children[0].classList.add("on");
        }

        window.addEventListener('load', roImg);
        section[2].addEventListener('wheel', roImg);
        var ibox = document.querySelectorAll(".ibox");
        var icount = 0;
        var tn = 0;

        function roImg(e){
            if(e.wheelDelta>0) return;
            if(tn) return;
            icount--;
            ibox[0].style.transform = `rotate(${icount}deg) translateX(400px)`;
            ibox[1].style.transform = `rotate(${icount+30}deg) translateX(400px)`;
            ibox[2].style.transform = `rotate(${icount+60}deg) translateX(400px)`;
            ibox[3].style.transform = `rotate(${icount+90}deg) translateX(400px)`;
            if(icount<-90 && tn == 0 ){
                icount = 0;
                ibox[0].style.transform = `rotate(${icount}deg) translateX(400px)`;
                ibox[1].style.transform = `rotate(${icount+30}deg) translateX(400px)`;
                ibox[2].style.transform = `rotate(${icount+60}deg) translateX(400px)`;
                ibox[3].style.transform = `rotate(${icount+90}deg) translateX(400px)`;
                tn = 1;
            }else{
                count = 0;
            }
        }

        // 스크롤 막기 시작
        $('html, body').css({'overflow': 'hidden', 'height': '100%'});
        $('#element').on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
        });
        //스크롤 막기 끝

window.onload = function() {
    var index = 0;
    var timeInterval = setInterval(() => {
        index++;
        showPics(index%4+1);
    }, 3000);

    $(".h-banner").hover(function(){
        clearInterval(timeInterval)
    },function(){
        timeInterval = setInterval(() => {
            index++;
            showPics(index%4+1);
        }, 3000);
    });

    function showPics(index) { //普通切换
        $(`.h-banner li:nth-child(${index})`).animate({
            
        },0.2).css("display","block");
        $(`.h-banner li:nth-child(${index})`).siblings().animate({
            
        },0.2).css("display","none");

        $(`.hd a:nth-child(${index})`).addClass("on");
        $(`.hd a:nth-child(${index})`).siblings().removeClass("on");

        // console.log(`index = ${index}`)
    }

    $(".hd a").click((e)=>{
        var currentIndex = $(".hd").children().index(e.currentTarget)
        index = currentIndex+1
        showPics(index);
    });

    $(".h-brand li a").hover((e)=>{
        var $obj = $(e.currentTarget);
        var $span = $($obj.children("span")[0])
        $span.css("top","0")
    },(e)=>{
        var $obj = $(e.currentTarget);
        var $span = $($obj.children("span")[0])
        $span.css("top","200px")
    });

    onscroll = function () {
        if(document.body.scrollTop<=30&&document.documentElement.scrollTop<=30){
            $(".topw").css("top","0px");
        }
        else {
            $(".topw").css("top","-30px");
        }
    }
}
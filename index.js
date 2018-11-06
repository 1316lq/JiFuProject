
window.onload = function() {
    var index = 0;
    setInterval(() => {
        index++;
        showPics(index%4+1);
    }, 3000);

    function showPics(index) { //普通切换
        $(`.h-banner li:nth-child(${index})`).animate({
            
        },0.2).css("display","block");
        $(`.h-banner li:nth-child(${index})`).siblings().animate({
            
        },0.2).css("display","none");

        $(`.hd a:nth-child(${index})`).addClass("on");
        $(`.hd a:nth-child(${index})`).siblings().removeClass("on");
    }
}
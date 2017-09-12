/**
 * Created by Administrator on 2017/6/29.
 */
$(function(){
    /*  图片懒加载 */
    $("img").lazyload({
        effect: "fadeIn",
        threshold : 200,
        placeholder : "image/icon/loding.png"
    });
//菜单显示

$(".nav-list .js-item").hover(function(){
    var index = $(this).index();
    $(".nav-show > .nav-list-meun").eq(index-1).slideDown(500).siblings().hide(200);
});
$(".banner ,.guide-banner,.logo,.detail-info,.login-content ,.muuto-banner").mouseout(function () {
    $(".nav-show .nav-list-meun").fadeOut(300);
});
//新闻滚动
function newsScroll(){
    $(".news").animate({"margin-top":"-30px"},function(){
        $(".news li:eq(0)").appendTo($(".news"));
        $(".news").css({"margin-top":"0"})
    });
}
var time = setInterval(newsScroll ,1500);
$(".news li").mouseover(function () {
    clearTimeout(time)
}).mouseout(function () {
    time = setInterval(newsScroll ,1500)
});
    //回到顶部
       $(window).scroll(function(){
          if($(this).scrollTop()>=800){
            $(".bg").fadeIn(800)
          }else{
            $(".bg").fadeOut(300)
          }
       });
       $(".bg").find(".d2").click(function(){
            document.documentElement.scrollTop = document.body.scrollTop = 0
       });
       //搜索休闲椅
    function searchInfo(btn){
        var searchText = btn.val();
        if (searchText == "休闲椅") {
            window.location.href = "./search.html"
        } else {
            btn.attr("placeholder", '目前只能搜索"休闲椅"！')
           }
        }
        $(".js-search-info").keydown(function(event){
            if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))){
                searchInfo($(this))
            }else {
                if (event.keyCode == 13) {
                    searchInfo($(this))
                }
            }

        });
       $(".js-search-btn").click(function () {
               searchInfo($(this).siblings(".js-search-info"))
       });
    //

});

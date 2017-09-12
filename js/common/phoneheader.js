/**
 * Created by FDG282 on 2017/7/12.
 */
$(function(){
    /*  图片懒加载 */
    $("img").lazyload({
        effect: "fadeIn",
        threshold : 180,
        placeholder : "image/icon/loding.png"
    });
        var WindowChangeInfo = "请把设备调整至竖屏，获取更好体验！";
        function hengshuping(){
            if(window.orientation==180||window.orientation==0){
                window.location.reload();
            }
            if(window.orientation==90||window.orientation==-90){
                $('body').html(WindowChangeInfo)
            }
        }
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
    function IsPC()
    {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
        }
        return flag;
    }
    var touchEvents = {
        touchstart: "touchstart",
        touchmove: "touchmove",
        touchend: "touchend"
    };

    $('.nav__trigger').bind(touchEvents.touchend, function(e){
        e.preventDefault();
        $(this).parent().toggleClass('nav--active');
        $(".phone-nav-box").addClass("show-in");
    });
   $(".phone-nav-box .nav-item").each(function(){
       var _index = $(this).index()+1;
       $(this).attr("id","item-"+_index);
       $("#item-1").bind(touchEvents.touchend,function(e){
           e.preventDefault();
           $(this).parents('.phone-nav-box').siblings('#item-list-1').addClass("show-in").removeClass("show-out");
           $(this).parents('.phone-nav-box').removeClass('show-in').addClass('show-out');
       });
       $("#item-4").bind(touchEvents.touchend,function (e) {
           e.preventDefault();
           $(this).parents('.phone-nav-box').siblings('#item-list-4').addClass("show-in").removeClass("show-out");
           $(this).parents('.phone-nav-box').removeClass('show-in').addClass('show-out');
       })
   });
   /*进口家具*/
   $("#js-list-8").bind(touchEvents.touchend,function (e) {
       e.preventDefault();
        $("#js-list-8-i").addClass("show-in");
        $(this).parents("#item-list-1").removeClass("show-in").addClass("show-out");
   });
    $("#js-list-8-i").find(".nav-title").bind(touchEvents.touchend,function (e) {
        e.preventDefault();
        $(this).parents("#js-list-8-i").removeClass("show-in").addClass("show-out");
        $("#item-list-1").removeClass("show-out").addClass("show-in")
    });
   $("#item-list-1").find(".nav-title").bind(touchEvents.touchend,function (e) {
       e.preventDefault();
       $(this).parents("#item-list-1").removeClass("show-in").addClass("show-out");
       $("#item-list").removeClass("show-out").addClass("show-in")
   });
   /* 桌几 */
   $("#item-list-1-5").bind(touchEvents.touchend,function (e) {
       e.preventDefault();
       $(this).parents("#item-list-1").removeClass("show-in").addClass("show-out");
     $("#js-list-5-i").removeClass("show-out").addClass("show-in");
   });
    $("#js-list-5-i").find(".nav-title").bind(touchEvents.touchend,function (e) {
        e.preventDefault();
        $("#js-list-5-i").removeClass("show-in").addClass("show-out");
        $("#item-list-1").removeClass("show-out").addClass("show-in")
    });
   /* 床品 */
   $('#item-list-4').find(".nav-title").bind(touchEvents.touchend,function (e) {
       e.preventDefault();
       $(this).parents("#item-list-4").removeClass("show-in").addClass("show-out");
       $("#item-list").removeClass("show-out").addClass("show-in")
   });

  $(".js-search-i").bind(touchEvents.touchend,function (event){
      event.preventDefault();
      $(this).parents(".h-item").addClass("search-box").siblings().hide();
      $(this).siblings().show();
    });
  $(".info-close").bind(touchEvents.touchend,function (event) {
      event.preventDefault();
      $(this).parents(".h-item").removeClass("search-box").siblings().show();
      $(this).hide();
      $(this).siblings(".js-search-info").hide()
  });
     $(".tab-ad .link-more:first-child").addClass("active");
   $(".tab-ad .link-more").bind(touchEvents.touchend,function (event){
       event.preventDefault();
       var index = $(this).index();
       $(this).addClass("active").siblings().removeClass("active");
       $(".address").eq(index).show().siblings(".address").hide();
   });
    $(".form-title li").bind(touchEvents.touchend,function (event) {
        event.preventDefault();
        var index = $(this).index();
        $(this).addClass("activeTab").siblings().removeClass("activeTab");
        $(".form-content>div").eq(index).show().siblings().hide();
    });
    $(".partners .list").bind(touchEvents.touchend,function (event) {
        $(this).children(".item").show().siblings("h4").find("span").text("-");
        $(this).siblings().children(".item").hide().siblings("h4").find("span").text("+");
    })
});
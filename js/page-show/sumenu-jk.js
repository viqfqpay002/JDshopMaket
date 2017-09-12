/**
 * Created by FDG282 on 2017/7/25.
 */
$(function () {
    //进口家具页面banner效果
    var miniBanner =  $(".mini-banner-scroll .scroll-list .item");
    var banner = $(".guide-banner .banner-img-list .banner-item");
    var miniBanerW = miniBanner.width();
    function insterMini() {
        banner.each(function () {
            var content = $(this).children().html();
            var imgIndex = $(this).index();
            miniBanner.eq(imgIndex).html(content);
        });
    }
    function over(){
        insterMini();
        miniBanner .hover(function(){
            var that = $(this);
            var index = that.index();
            banner.eq(index).fadeIn(800).siblings().fadeOut(500)
        });
    }
    var i=0;
    var len=$(".banner-img-list  li").length-1;
    $(".next").click(function(){
        if(i==len){
            i=-1
        }
        i++;
        $(".banner-img-list  li").eq(i).fadeIn().siblings().hide();
        $("#scroll-list  li").eq(i).addClass("img-active").siblings().removeClass("img-active")
    });
    $(".prev").click(function(){
        if(i==0){
            i=len+1;
        }
        i--;
        $(".banner-img-list  li").eq(i).fadeIn().siblings().hide();
        $("#scroll-list  li").eq(i).addClass("img-active").siblings().removeClass("img-active")
    });
    over();
    //移动端
    function goPAGE() {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            $('#img-box').flickity({
                // options
                cellAlign: 'left',
                contain: true,
                wrapAround: true,
                pageDots: true,
                autoPlay: true
            });
        }
    }
    goPAGE()

});
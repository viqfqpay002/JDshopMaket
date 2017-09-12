/**
 * Created by Administrator on 2017/7/5.
 */
$(function(){
    //列表颜色转换
    $(".doct-color li").mouseover(function () {
        var that = $(this);
        var index = that.index();
        that.addClass("slider-item-selected").siblings().removeClass("slider-item-selected");
        that.parents(".product-list .item").find(".img-b-list li").eq(index).fadeIn(800).siblings().fadeOut(200);
    });

       /*排序*/
    $(".select").hide();
       $(".js-select-icon").click(function () {
          $(".select").show();
       });
/*    var  minibanner= $('#sub-banner').unslider({
            dots: true
        }),
        bInit= minibanner.data('unslider');
    var miniBanner =  $("#sub-banner .dots .dot");
    var banner = $(".guide-banner .banner-img-list .banner-item");
    function insterMini() {
        banner.each(function () {
            var content = $(this).html();
            var imgIndex = $(this).index();
            miniBanner.eq(imgIndex).html(content);
            $(".mini-banner-scroll .scroll-box .scroll-list").html($("#sub-banner .dots").html());
        });

    }*/
    //移动端
    //详情页说明效果
    function phoneShow(){
        $(".tab-nav-box .tab-title").each(function(){
            $(this).next().hide();
            $(this).hover(function(){
                $(this).next().show().parents(".item").siblings().find(".tab-title").next().hide();
            })
        });
        $(".question .question-list .item").hover(function(){
            $(this).find(".icon").text("-");
        },function(){
            $(this).find(".icon").html("+")
        })
    }
    function goPAGE1() {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
              phoneShow();
        }
    }
    goPAGE1();

});
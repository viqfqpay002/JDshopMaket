/**
 * Created by Administrator on 2017/6/27.
 */
$(function() {
    $("#my-banner").flickity({
        cellAlign: 'left',
        contain: true,
        wrapAround: true ,
        pageDots: true,
        autoPlay:true
    });

function scroll(next){
    next.on("click",function () {
        $(this).parent().siblings().show();
    });
}
    function scrollList(warpId,name,leftId,rightId,boxWidth,pageWidth,play){
         name = new ScrollPic();
         name.scrollContId =  warpId;
        name.arrLeftId      = leftId;
        name.arrRightId     = rightId; //右箭头ID
        name.frameWidth     = boxWidth;//显示框宽度
        name.pageWidth      = pageWidth; //翻页宽度
        name.speed          = 20; //移动速度(单位毫秒，越小越快)
        name.space          = 20; //每次移动像素(单位px，越大越快)
        name.autoPlay       = play; //自动播放
        name.autoPlayTime   = 2; //自动播放间隔时间(秒)
        name.initialize(); //初始化
    }
    //品牌街
    function brands() {
        var brandsList = new ScrollPic();
        var warpId = $("#brandslist");
        var pageWidth = warpId.children("li:first").outerWidth(true);
        var boxWidth= warpId.width();
        scrollList("brandslist",brandsList,"al2","ar2",boxWidth,pageWidth,true);
        scroll($("#ar2"));
    }
    function brands2() {
        var brandsList = new ScrollPic();
        var warpId = $("#brands-mini");
        var pageWidth = warpId.find(".scroll-item:first").outerWidth(true);
        var boxWidth= warpId.width();
        scrollList("brandslist",brandsList,"al2","ar2",boxWidth,pageWidth,true);
    }
    //热卖
    function hotList() {
        var hotList = new ScrollPic();
        var warpId = $("#hot");
        var pageWidth = warpId.width();
        var boxWidth= warpId.width();
        scrollList("hot",hotList,"al3","ar3",boxWidth,pageWidth,false);
        scroll($("#ar3"));
    }
    function hostList2() {
        var hotLists2 = new ScrollPic();
        var warpId = $("#hot-mini");
        var pageWidth = warpId.find("li:first").outerWidth();
        var boxWidth= warpId.width();
        scrollList("hot-mini",hotLists2,"al3","ar3",pageWidth,pageWidth,true);
    }
    function goPAGE() {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            hostList2();
            /*  brands2();*/
            $("#brandslist").flickity({
                cellAlign: 'left',
                contain: true,
                autoPlay: true,
                wrapAround: true,
                pageDots: false
            });

        } else {
              brands();
             hotList();

           /* var $siderImg = $(".brands-scroll ul");
            var $siderImgHtml = $siderImg.html();
            $siderImg.html($siderImgHtml+$siderImgHtml);
            var $imgWidth = $siderImg.children().eq(0).width();  //img元素的宽度
            var $size =  $siderImg.children().size();  //img元素的个数
            var $ulWidth = $imgWidth * $size;   //获取ul中img元素的总宽度
            $siderImg.css("width",$ulWidth+"px");   //设置ul中宽度
            $leftVar=0;
            var $temp=-$imgWidth;
            var $interval = null;
            var  moveImg = function()
            {
                $leftVar=$leftVar+$temp;
                if($temp>0)
                {
                    if($leftVar==0)
                    {
                        $leftVar =-$ulWidth/2; //向左走重置
                    }
                }
                if($temp<0)
                {
                    if($leftVar==-$ulWidth/2)
                    {
                        $leftVar = 0;  //向右走重置
                    }
                }
                $siderImg.css("left",$leftVar);
            };

//设置一定时间调用反复调用该函数
            interval = setInterval(moveImg,1000);

            /!*鼠标待在元素上面触发该事件*!/
            $siderImg.mouseover(function(){
                clearInterval(interval);
            });
            /!*鼠标移开触发该事件*!/
            $siderImg.mouseout(function(){
                interval = setInterval(moveImg,1000);
            });

            $("#ar2").click(function(){
                $temp = -$imgWidth;
            });

            $("#al2").click(function(){
                $temp = $imgWidth;
            });*/

        }
    }
    goPAGE();
});
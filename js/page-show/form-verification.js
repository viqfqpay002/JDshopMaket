/**
 * Created by Administrator on 2017/7/1.
 */
$(function(){

    var info="<span class='info'></span>";
    var verificationInfo = {
        phoneInfo:{
              errMsg1:"手机号不能为空！",
              errMsg2:"手机号格式不正确！"
        },
        passwordInfo:{
            errMsg1:"密码不能为空！",
            errMsg2:"密码长度至少6个字符必须含有字母！"
        },
        verification:{
            errMsg1:"验证码不能为空！",
            errMsg2:"验证码至少为6位数！"
        },
        passwordAginInfo:{
            errMsg1:"两次输入的密码不一致"
        },
        winInfo:"正确！"
    };
    function verification(info,style,dom,dombox){
        dombox.append(info);
    }
    //登录验证
    $("#login-content .username, #login-content .password").append(info);
    var logUseInfo =  $("#login-content .username .info");
    var logPasInfo =  $("#login-content .password .info");
    $(".input-group .info").empty();
    $("#login-content .phone-number").keyup(function(){
        var username = $(this).val();
           if(username<=0){
               logUseInfo.html(verificationInfo.phoneInfo.errMsg1);
               logUseInfo.css("color","red")
           }else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(username))){
               logUseInfo.html(verificationInfo.phoneInfo.errMsg2);
               logUseInfo.css("color","red")
           }else {
               logUseInfo.html(verificationInfo.winInfo);
               logUseInfo.css("color","green")
           }
    });
    $("#login-content.password-input").focus(function () {
        var username =  $(this).val();
        if(username.length<=0){
            $("#login-content .phone-number").css("border-color","red");
             logUseInfo.html(verificationInfo.phoneInfo.errMsg1);
              logUseInfo.css("color","red")
        }
    });

    $("#login-content .password-input").keyup(function () {
        var passwrod= $(this).val();
        if(passwrod.length<=0){
           logPasInfo.html(verificationInfo.passwordInfo.errMsg1);
            logPasInfo.css("color","red")
        }else if(!(/([a-zA-Z0-9!@#$%^&*()_?<>{}]){6,16}/.test(passwrod))){
            logPasInfo.html(verificationInfo.passwordInfo.errMsg2);
            logPasInfo.css("color","red");
        }else{
           logPasInfo.html(verificationInfo.winInfo);
            logPasInfo.css("color","green")
        }
    });
    $("#js-login-btn").click(function () {
        var username =  $("#login-content .phone-number").val();
        var passwrod= $("#login-content .password-input").val();
        if(username!==""&&passwrod!==""){

        }else if(username==""){
            $("#login-content .phone-number").css("border-color","red");
           logUseInfo.html(verificationInfo.phoneInfo.errMsg1);
           logUseInfo.css("color","red");
        }else if(passwrod ==""){
          $("#login-content .password-input").css("border-color","red");
            logPasInfo.html(verificationInfo.phoneInfo.errMsg2);
            logPasInfo.css("color","red")
        }
    });

    //注册验证
    $("#register-content .username,#register-content .verification-box,#register-content .password,#register-content .password-agin").append(info);
  
    var reUserInfo = $("#register-content .username .info");
    var reVerInfo = $("#register-content .verification-box .info");
    var rePasInfo = $("#register-content .password .info");
    var rePasAginInfo = $("#register-content .password-agin .info");

     $("#register-content .phone-number").keyup(function(){
        var username =  $(this).val();
           if(username.length<=0){
               reUserInfo .html(verificationInfo.phoneInfo.errMsg1);
              reUserInfo .css("color","red")
           }else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(username))){
               reUserInfo .html(verificationInfo.phoneInfo.errMsg2);
               reUserInfo .css("color","red")
           }else {
               reUserInfo .html(verificationInfo.winInfo);
               reUserInfo .css("color","green")
           }

     });
     $("#register-content .verification-input").keyup(function(){
        var verification = $(this).val();
         if(verification.length<=0){
          reVerInfo.html(verificationInfo.verification.errMsg1);
          reVerInfo.css("color","red")
         }else if(verification.length<6){
           reVerInfo.html(verificationInfo.verification.errMsg2);
          reVerInfo.css("color","red")
         }else{
           reVerInfo.html(verificationInfo.winInfo);
           reVerInfo.css("color","green")
         }
     });

     $("#register-content .password-input").keyup(function(){
       var passwrod= $(this).val();
        if(passwrod.length<=0){
           rePasInfo.html(verificationInfo.passwordInfo.errMsg1);
            rePasInfo.css("color","red")
        }else if(!(/([a-zA-Z0-9!@#$%^&*()_?<>{}]){8,18}/.test(passwrod))){
            rePasInfo.html(verificationInfo.passwordInfo.errMsg1);
            rePasInfo.css("color","red");
        }else{
            rePasInfo.html(verificationInfo.winInfo);
            rePasInfo.css("color","green")
        }
     });

     $("#register-content .password-agin").blur(function(){
        var passwordAgin = $(this).val();
          passwordAgin=+passwordAgin;
          console.log(passwordAgin);

       var passwrod4= $("#register-content .password-input").val();
        if(passwordAgin!=passwrod4){
              rePasAginInfo.html("两次输入的密码不一致");
              rePasAginInfo.css("color","red");
        }else if(passwordAgin==""){
              rePasAginInfo.html("");

        } else{
               rePasAginInfo.html("正确！");
               rePasAginInfo.css("color","green");
        }
     });
   //倒计时发送短信
     $(".js-ver-btn").click(function(){
         var that = $(this);
         var time = 60;
        //连接接口发送短信
        var tim = setInterval(function(){
           that.text(time+"S后重新发送").attr("disabled",true).css({
              "background":"black",
              "color":"#fff"
            });
            time--;
              if(time==0){
          clearInterval(tim);
           that.text("获取手机验证码").attr("disabled",false);
        }
          },1000);

         });

     $(".js-regitster-btn").click(function(){
       var username =  $("#register-content .phone-number").val();
       var verification = $("#register-content .verification-input").val();
       var passwrod = $("#register-content .password-input").val();
       var passwrodAgin =  $("#register-content .password-agin").val();
       if(username!=""&&verification!=""&&passwrod!=""&&passwrodAgin!=""){
        //传给后台
             console.log("注册成功，获得会员积分,请登陆")
       }else if(username==""){
           $("#register-content .phone-number").css("border-color","red");
            reUserInfo.html(verificationInfo.phoneInfo.errMsg1);
            reUserInfo.css("color","red");
        }else if(verification==""){
           $("#register-content .verification-input").css("border-color","red");
          reVerInfo.html(verificationInfo.verification.errMsg1);
          reVerInfo.css("border-color","red")
        }else if(passwrod==""){
           $("#register-content .password-input").css("border-color","red");
            rePasInfo.html(verificationInfo.passwordInfo.errMsg1);
            rePasInfo.css("border-color","red")
        }else if(passwrodAgin==""){
           $("#register-content .password-agin").css("border-color","red");
              rePasAginInfo.html(verificationInfo.passwordAginInfo.errMsg1);
              rePasAginInfo.css("border-color","red");
        }

      
     });
 
        
});
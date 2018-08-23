//是否为空
function ifnull(txt){
    if(txt.length==0){
        return true;
    }
    var $reg=/\s+/;
    return $reg.test(txt);
}
//在id为email的元素失去焦点时进行邮箱的验证
$("#email").blur(function(){
    if(ifnull($(this).val())){
        $("#email_msg").html("邮箱不能为空");
    }else{
        var $reg=/^[a-zA-Z1-9]\w{1,}@[a-zA-Z1-9]{2,}(\.(com|cn|net)){1,2}$/;
        if(!$reg.test($("#email").val())){
            $("#email_msg").html("邮箱格式错误！");
        }else{
            $("#email_msg").html("√").CSS("color","");
        }
    }
});
//在id为username的元素失去焦点时进行用户名的验证
$("#username").blur(function(){
    if(ifnull($(this).val())){
        $("#username_msg").html("用户名不能为空");
    }else{
        var $reg=/^\w{6,}$/;
        if(!$reg.test($("#username").val())){
            $("#username_msg").html("用户名至少要6位哦");
        }else{
            $("#username_msg").html("√");
        }
    }
});
//在id为password的元素失去焦点时进行密码的验证
$("#password").blur(function(){
    if(ifnull($(this).val())){
        $("#password_msg").html("密码不能为空");
    }else{
        var $reg=/^\w{6,}$/;
        if(!$reg.test($("#password").val())){
            $("#password_msg").html("密码至少要6位哦");
        }else{
            $("#password_msg").html("√");
        }
    }
});
//在id为repassword的元素失去焦点时进行密码的验证
$("#repassword").blur(function(){
    if(ifnull($(this).val())){
        $("#repassword_msg").html("请确认密码");
    }else{
        if($("#password").val()!=$("#repassword").val()){
            $("#repassword_msg").html("两次密码不一致");
        }else{
            $("#repassword_msg").html("√");
        }
    }
});

//验证表单
function checkForm(){
    //验证邮箱
    if(ifnull($("#email").val())){
        $("#email_msg").html("邮箱不能为空！");
        return false;
    }else{
        var $reg=/^[a-zA-Z1-9]\w{1,}@[a-zA-Z1-9]{2,}(\.(com|cn|net)){1,2}$/;
        if(!$reg.test($("#email").val())){
            $("#email_msg").html("邮箱格式错误！");
            return false;
        }
    }
    //验证用户名
    if(ifnull($("#username").val())){
        $("#username_msg").html("用户名不能为空！");
        return false;
    }else{
        var $reg=/^\w{6,}$/;
        if(!$reg.test($("#username").val())){
            $("#username_msg").html("用户名至少6位");
            return false;
        }
    }
    //验证密码
    if(ifnull($("#password").val())){
        $("#password_msg").html("密码不能为空");
        return false;
    }else{
        var $reg=/^\w{6,}$/;
        if(!$reg.test($("#password").val())){
            $("#password_msg").html("密码至少6位");
            return false;
        }
    }
    //确认密码是否为空
    if(ifnull($("#repassword").val())){
        $("#repassword_msg").html("请确认密码");
        return false;
    }
    //验证两次密码是否一致
    if($("#password").val()!=$("#repassword").val()){
        $("#repassword_msg").html("两次密码不一致");
        return false;
    }
    return true;
}
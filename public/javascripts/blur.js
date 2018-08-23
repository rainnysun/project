$(document).ready(function(){
//focusblur
    jQuery.focusblur = function(focusid) {
        var focusblurid = $(focusid);
        var defval = focusblurid.val();
        focusblurid.focus(function(){
            var thisval = $(this).val();
            if(thisval==defval){
                $(this).val("");
            }
        });
        focusblurid.blur(function(){
            var thisval = $(this).val();
            if(thisval==""){
                $(this).val(defval);
            }
        });

    };
    /*下面是调用方法*/
    $.focusblur("#text");
    $.focusblur("#password");
    $.focusblur("#repassword");
    $.focusblur("#username");
    $.focusblur("#email");
});
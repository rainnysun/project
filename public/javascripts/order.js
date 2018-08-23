$(function () {

    $(".add").click(function () {
        var t = $(this).parent().find('input[class*=result]');
        t.val(parseInt(t.val()) + 1);
        setTotal();
    });

    $(".minus").click(function () {
        var t = $(this).parent().find('input[class*=result]');
        t.val(parseInt(t.val()) - 1);
        if (parseInt(t.val()) < 0) {
            t.val(0);
        }
        setTotal();
    });

    function setTotal() {
        var s = 0;
        var v = 0;
        var n = 0;
        <!--计算总额-->
        $(".jiajian-1").each(function () {
            s += parseInt($(this).find('input[class*=result]').val()) * parseFloat($(this).siblings().find('span[class*=price]').text());

        });

        <!--计算总份数-->
        $("input[type='text']").each(function () {
            v += parseInt($(this).val());
        });
        $("#total").html(s.toFixed(2));
    }
    setTotal();

})
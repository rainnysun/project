$(function() {
    var skip = 0;
    var range = 50;             //距下边界长度/单位px
    var elemt = 500;           //插入元素高度/单位px
    var maxnum = 10;            //设置加载最多次数
    var num = 1;
    var totalheight = 0;
    var main = $(".section");//主体元素


    $(window).scroll(function () {
        var srollPos = $(window).scrollTop();    //滚动条距顶部距离(页面超出窗口的高度)
        totalheight = parseFloat($(window).height()) + parseFloat(srollPos);
        if (($(document).height() - range) <= totalheight && num != maxnum) {
            var showHtml = "";
            $.ajax({
                type: 'post',
                url: '/hotel/postAjax',
                data: {
                    skip: skip,
                },
                success: function (data) {

                    if (data != null) {
                        for (var o of data) {
                            showHtml += "<div class=\"section\">\n" +
                                "    <div class=\"title\">\n" +
                                "        <span class=\"icon fas fa-home fa-2x \"></span>\n" +
                                "        <span>"+o.siteOne+"<br>"+o.siteTwo+"</span>\n" +
                                "        <a href=\"\"><span class=\"order\">Order</span></a>\n" +
                                "    </div>\n" +
                                "    <div class=\"image\">\n" +
                                "        <img src='"+o.image+"' alt=\"\">\n" +
                                "        <div class=\"message\">\n" +
                                "            <span class=\"fas fa-home \">"+o.icon1+"</span>\n" +
                                "            <span class=\"fas fa-home \">"+o.icon2+"</span>\n" +
                                "            <span class=\"fas fa-home \">"+o.icon3+"</span>\n" +
                                "            <span class=\"price\">"+o.price+"</span>\n" +
                                "        </div>\n" +
                                "    </div>\n" +
                                "</div>"
                        }
                        $('#next').append(showHtml);
                        console.log(data);
                    }
                },
                error: function (error) {
                    console.log(error)
                }
            });
        }

    });
});
$(".section").smoove({offset:'40%'});





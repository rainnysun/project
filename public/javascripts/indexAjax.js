// $(function () {
//     // $(window).scroll(function(){
//     $("#next").click(function () {
//         var skip =2;
//         $.ajax({
//             type:'post',
//             url:'/indexTwo/postAjax',
//             data:{
//                 skip:skip+2
//             },
//             success:function (data) {
//                 var showHtml="";
//                 for(var o of data){
//                     showHtml +="<img class=\"card__picture\" src='"+o.image+"'>\n" +
//                         "       <div class=\"card-infos\"></div>\n" +
//                         "           <h2 class=\"card__title\">"+o.title+"</h2>\n" +
//                         "           <p class=\"card__text\">"+o.message+"</p>"
//                 }
//                 $('#showNextPage').append(showHtml);
//                 console.log(data)
//             },
//             error:function (error) {
//                 console.log(error)
//             }
//         });
//     })
// });


// $(".detail").smoove({offset:'40%'});
// $(function () {
//     // $(document).ajaxStart(function (){
//     $('.detail').smoove(function (){
//     // $('#showNextPage').scroll(function(){
//     // $(".mid-container").change(function(){
//     // $(".mid-container").mouseover(function () {
//         var skip =2;
//         $.ajax({
//             type:'post',
//             url:'/indexTwo/postAjax',
//             data:{
//                 skip:skip+2
//             },
//             success:function (data) {
//                 var showHtml="";
//                 for(var o of data){
//                     showHtml +="<a><img src='"+o.image+"'></a>\n" +
//                         "                <a class=\"site\">"+o.message+"</a>"
//                 }
//                 $('#showNextPage').append(showHtml);
//                 console.log(data)
//             },
//             error:function (error) {
//                 console.log(error)
//             }
//         });
//     },{offset:'40%'})
// });
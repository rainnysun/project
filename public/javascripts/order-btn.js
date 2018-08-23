window.onload=function(){
    var count=1;
    var count1=1;
    var adult=document.getElementById("btn1");
    var adcount=document.getElementById("btn2");
    var adco=document.getElementById("btn3");
    var child=document.getElementById("btn4");
    var chcount=document.getElementById("btn5");
    var chco=document.getElementById("btn6");
    adult.onclick=function(){
        count++;
        adcount.innerHTML=count;
        adco.onclick=function(){
            if(count>0){
                count--;
                adcount.innerHTML=count;
            }else{
                adcount.innerHTML=0;
            }
        }
    }
    child.onclick=function(){
        count1++;
        chcount.innerHTML=count1;
        chco.onclick=function(){
            if(count1>0){
                count1--;
                chcount.innerHTML=count1;
            }else{
                chcount.innerHTML=0;
            }
        }
    }
}
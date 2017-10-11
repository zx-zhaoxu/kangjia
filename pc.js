/**
 * Created by ÕÔÐñ on 2017/10/9.
 */
//¶þ¼¶²Ëµ¥
$(".nav>ul>li").hover(function(){
    $(this).children("div").stop().toggle();
});

var a=0;
$(".sp1").click(
    function(){
        a=a+1;
        if(a==2){a=0}
        $("ul").stop().animate({"margin-left":a*-1200});
    }
);
$(".sp2").click(
    function(){
        if(a==0){a=2};
        a=a-1;
        $("ul").stop().animate({"margin-left":a*-1200});
    }
);




$("li").hover(
    function(){
        var a=$(this).children("img").attr("title");
        $(".man_left_top img").attr("src",a)
    }
);



$(".kuan3").click(
    function(){
        var a=$(".kuan1").val();
        var z=Number(a)+1;
        $(".kuan1").val(z)
    }
);
$(".kuan2").click(
    function(){
        var a=$(".kuan1").val();
        var z=Number(a)-1;
        $(".kuan1").val(z)
    }
);


$(".box li").click(
    function(){
        var a=$(this).index();
        $(".main3>div").eq(a).show().siblings().hide();
        $(this).addClass("lei").siblings().removeClass("lei")
    }
);













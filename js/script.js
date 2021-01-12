$(function(){
    //思想学习tab显示
    $('#speach-nav-tabs a[href="#economic"]').tab('show');
    //治国理政tab show
    $('#manage-nav-tabs a[href="#conference"]').tab('show');
    //思想解读 tab show
    $('#interpretation-nav-tabs a[href="#specialist"]').tab('show');

    //牢记使命专题
    //重要论述tab show
    $('#edu-nav-tabs a[href="#comment"]').tab('show');

    //tagcould
     $('#v-discussion .tagcloud a[href="#t1"]').tab('show');
     $('#c-hotspot .tagcloud a[href="#ct1"]').tab('show');
    //dropdown menu 点击事件
    $("#topic-dropdown li a").click(function(){
        var newText = $(this).text();
        // console.log(newText);
        $("#topic span.hint").text(newText);
        $(".input").attr("placeholder", "按"+newText+"检索");
        $(".input").attr("value", "按"+newText+"检索");
    });

    //锚点链接+页面滚动监听事件
    $(".menu li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });

    $(window).scroll(function() {
      //为了保证兼容性，这里取两个值，哪个有值取哪一个
      //scrollTop就是触发滚轮事件时滚轮的高度
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log("滚动距离" + scrollTop);

      //判断页面
      let pageURL = window.location.href;
      let learningIndex = pageURL.indexOf("learning");
      let visonIndex = pageURL.indexOf("vision") ;
      let confidentialIndex = pageURL.indexOf("confidential");
      if(learningIndex>=0){
         //获取高度
        let speachPosition = $("#l-speach").offset().top;
        let managePosition = $("#l-manage").offset().top;
        let interPosition = $("#l-inter").offset().top;
        //active
        if(scrollTop>=speachPosition && scrollTop < managePosition){
            $("ul.learning-nav a[href='#l-speach']").
            parent("li").addClass("active");
            $("ul.learning-nav a[href='#l-speach']").
            parent("li").siblings().removeClass("active");
        }
        else if(scrollTop<speachPosition){
            $("ul.learning-nav a[href='#top']").
            parent("li").addClass("active");
            $("ul.learning-nav a[href='#top']").
            parent("li").siblings().removeClass("active");
        }
      }
      else if(visonIndex>=0){
        let newsPosition = $("#v-news").offset().top;
        if(scrollTop < newsPosition){
            $("ul.vision-nav a[href='#v-top']").
            parent("li").addClass("active");
            $("ul.vision-nav a[href='#v-top']").
            parent("li").siblings().removeClass("active");
        }
      }
      else if(confidentialIndex >= 0){
        let cnewsPosition = $("#c-news").offset().top;
        if(scrollTop < cnewsPosition){
            $("ul.confidential-nav a[href='#c-top']").
            parent("li").addClass("active");
            $("ul.confidential-nav a[href='#c-top']").
            parent("li").siblings().removeClass("active");
        }
      }

    });
});
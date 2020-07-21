$(document).ready(function () {
	$(document).scroll(function(){
	//回到顶部
	var top=$(document).scrollTop();
	console.log(top)
	if(top>10){
		$(".toTop").show();
	}else if(top<10){
		$(".toTop").hide("slow");
	}
	
})
$(".toTop").click(function () {
//      var speed=10;//滑动的速度
        $("html,body").animate({ "scrollTop": 0}, "slow");
        $(".toTop").hide("slow");
        return false;
	})

//	导航logojs
	$(".header-r .drag-nav").click(function(){
		$(".header .nav").toggle();
	})
	
	var proW=$(".pro-indexList li").width();
	console.log(proW);
	$(".pro-indexList li").height(proW);

	$(".celan .close").click(function(){
		$(".celan").hide("slow");
	})
})
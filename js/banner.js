var index=0,timer=null;
			function loop(){
				index=++index;
				if(index>=$(".slide-f-con li").length){
					index=0;
				}
				paly();
			}
			function paly(){
				$(".slide-f-active li").removeClass("active").eq(index).addClass("active");
				$(".slide-f-con li").css("margin-left","600px").eq(index).animate({"margin-left":"0px"},"slow");
				var n=index;
				if(index==0){
					n=$(".slide-f-con li").length-1;
				}
				var src=$(".slide-f-con li").eq(n).prev().find("img").attr("src");
//				console.log(src);
				$(".slide-f-con").css({"background-image":"url("+src+")","background-repeat":"no-repeat","background-size":"cover"});
			}
			timer=setInterval(loop,20000);
				$(".slide-f-active li").mouseover(function(){
					index=$(this).index();
					paly();
				})
				$(".slide_f").mouseover(function(){
					clearInterval(timer);
				})
				$(".slide_f").mouseout(function(){
					timer=setInterval(loop,2000);
				})
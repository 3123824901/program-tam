$(function(){
	$("#top").load("index.html");
	$("#nav .margin dl").find("dd").hover(function(){
		var _this=$(this);
		$(this).find("a").css("color","#e54077").end().siblings().find("a").css("color","#000");
		$(".show-content").eq((_this.index()-1)).show().siblings().hide();
	});
	$("#nav .margin .show").find(".show-content").mouseleave(function(){
		$(this).hide();
	});
	$("#nav ul").find("li").hover(function(){
		var wid=($(this).width()-$(this).find("u").width())/2;
		$(this).find("u").show().css("left",wid).end().siblings().find("u").hide();		
	},function(){
		$(this).find("u").hide();
	})
})

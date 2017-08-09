$(function() {
	$("header").load("index.html");
	$(".stairs").load("stairs.html");
	$("aside").load("asideR.html");
	$("footer").load("foot.html");
		
	$("#nav .margin .dl").find("dd").hover(function() {
		var _this = $(this);
		$(".show-content").eq((_this.index() - 1)).show().siblings().hide();
	});
	$("#nav .margin .show").find(".show-content").mouseleave(function() {
		$(this).hide();
	});
	$("#nav ul").find("li").hover(function() {
		var wid = ($(this).width() - $(this).find("u").width()) / 2;
		$(this).find("u").show().css("left", wid).end().siblings().find("u").hide();
	}, function() {
		$(this).find("u").hide();
	});
	//nav部分
	$.get("json/nav.json", function(data) {
		var html = template("nav1", data);
		//console.log(data);
		$("#nav dl").html(html).prepend('<dt><i>&#xe606;</i>商品分类</dt>');
	});
	$(".dl").on("mouseenter", "dd", function() {
		$(".show-content").show();
		var index = $(this).index();
		console.log(index)
		$.get("json/nav_data.json", function(data) {
			console.log(data[index - 1]);
			var html = template("show-content", data[index - 1]);
			$(".show-content").html(html);
		});
	})

	$("#sliderBox").slider({direction:"left",showNav:true,width:1440,height:500});




})
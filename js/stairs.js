$(function() {
	$.get("json/stairs.json", function(data) {
		var html = template("Louti", data);
		//console.log(html);
		$(".subject1").html(html);
		foo();
	})
	$.get("json/stairs2.json", function(data) {
		var html = template("Louti", data);
		//console.log(html);
		$(".subject2").html(html);
		foo();
	})
	$.get("json/stairs3.json", function(data) {
		var html = template("Louti", data);
		//console.log(html);
		$(".subject3").html(html);
		foo();
	})

	function foo() {

		//楼梯
		var flag = true;

		function scroll() {
			var scrollTop = $(window).scrollTop();
			scrollTop > 700 ? $("#LoutiNav").fadeIn(300) : $("#LoutiNav").fadeOut(300);
			var chei = $(".Louti").filter(":first-child").offset().top;
			var c = Math.round((scrollTop - chei) / 470) + 1;
			if(c >= 0) {

				$("#LoutiNav li").eq(+c).css("background", "#F62760")
					.siblings(":not(:first)").css("background", "#626262");
				$("#LoutiNav li:last").css("background", "#ababab");
			}
		}
		$(window).scroll(function() {
			if(flag) {
				scroll();
			}

		});
		$("#LoutiNav li:not(:last)").click(function() {
			flag = false;
			//$(this).addClass("hover").siblings().removeClass("hover");
			$(this).css("background", "#F62760").siblings(":not(:first)").css("background", "#626262");
			$("body,html").stop().animate({
				"scrollTop": $(".Louti").eq($(this).index() - 1).offset().top
			}, 500, function() {
				flag = true;
			});
		})
		$("#LoutiNav li:last").click(function() {
			console.log($("#LoutiNav"))
			flag = false;
			$("body,html").stop().animate({
				"scrollTop": 0
			}, 500, function() {
				flag = true;
			});
		});
		$(".fill-l").hover(function() {
			$(this).find("img").animate({
				"opacity": ".7"
			}, 300).siblings().find("li").css("color", "red");
		}, function() {
			$(this).find("img").animate({
				"opacity": "1"
			}, 300).siblings().find("li").css("color", "#000");
		});
		$(".fill-c").find("li").hover(function() {

			$(this).find("img").animate({
				"right": 6
			}, 300);
		}, function() {
			$(this).find("img").animate({
				"right": 0
			}, 300);
		});
		$(".fill-r").find("li").hover(function() {
			$(this).find("img").animate({
				"right": 6
			}, 300);
		}, function() {
			$(this).find("img").animate({
				"right": 0
			}, 300);
		});

	};
})

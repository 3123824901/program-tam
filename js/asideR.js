$(function(){
	//获取COOKIE
	var str2 = Cookies.get("cart");
	var obj = str2 ? JSON.parse(str2) : {};
	var sum = 0;
	for(var i in obj) {
		console.log(obj[i]);
		sum += obj[i];
	}
	$(".cart").find("span u").text(sum);

	
	
	$(".con").find("i").hover(function(){
		$(this).next("a").show().stop().animate({"right":"40px"},500);
		
	},function(){
		$(this).next("a").hide().stop().animate({"right":"100px"},500);
	});
	$(".fy i").click(function(){
		var scrollTop=$(window).scrollTop();
		$("body,html").stop().animate({"scrollTop":0},800);
	})
	
	$(".cart").click(function(){
		location.assign("shoppingCart.html");
		
		
	})
	
	
})

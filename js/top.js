$(function(){
	
	//购物车
	var str2 = Cookies.get("cart");
	var obj = str2 ? JSON.parse(str2) : {};
	var sum = 0;
	for(var i in obj) {
		console.log(obj[i]);
		sum += obj[i];
	}
	$(".top_cart span").text(sum);
	

	
	
		
})

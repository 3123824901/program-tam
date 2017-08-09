$(function(){
	//用户名	
	var str=Cookies.get('user');
	var obj = str ? JSON.parse(str):{};
	console.log(obj);
	var username=obj.name1;
	if(username!=""){
		$("#top .top-l").find("span").text("Hi~~"+username+",欢迎回家!").next().hide();
	}else{
		$("#top .top-l").find("span").text("喵，欢迎来天猫").next().show();
	}
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

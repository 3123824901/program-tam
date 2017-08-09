$(function() {
	$(".code_1 .img2").click(function() {
		$(".code_1").hide().next().show();
	})
	$(".code_1 .mima a:first-child").click(function() {
		$(".code_1").hide().next().show();
	});
	$(".code_2 .img2").click(function() {
		$(".code_2").hide().prev().show();
	})
	
	
	//用户信息cookie
	var str=Cookies.get('user');
	var obj = str ? JSON.parse(str):{};
	console.log(obj);
	var username=obj.name1;
	if(username!=""){
		$(".code_2 .inp #txt").val(obj.name1);
		$(".code_2 .inp #psw").val(obj.pasw1);
	}
	
	$(".button").click(function(){
		if($(".code_2 .inp #txt").val()==""){
			$(".code_2 .inp #txt").val("用户名不能为空").css("border","1px solid #ff0036");
		}else if($(".code_2 .inp #txt").val()!=obj.name1){
			$(".code_2 .inp #txt").val("用户名不存在").css("border","1px solid #ff0036");
		}else{
			$(".code_2 .inp #txt").attr("data-cl","ok");
		}
						
		if($(".code_2 .inp #psw").val()==""){
			$(".code_2 .inp #psw").css("border","1px solid #ff0036");
		}else if($(".code_2 .inp #psw").val()!=obj.pasw1){
			console.log(obj.pasw1,$(".code_2 .inp #psw").val())
			$(".code_2 .inp #psw").css("border","1px solid #ff0036").next().show();
		}else{
			$(".code_2 .inp #psw").attr("data-cl","ok");
		}
		
		if($(".code_2 .inp #txt").attr("data-cl")=="ok" && $(".code_2 .inp #psw").attr("data-cl")=="ok"){
			$(this).attr("href","main.html");					
		}
		
		
	})
	

})
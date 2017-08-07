$(function(){
	//弹出层
	$("#cover").show().find("#btn1").click(function(){
		$("#cover").hide();
	});
	//手机号
	// 移动号码段:139、138、137、136、135、134、150、151、152、157、158、159、182、183、187、188、147 
	// 联通号码段:130、131、132、136、185、186、145 
	// 电信号码段:133、153、180、189
	$("#txt").blur(function(){
		var val=$(this).val();		
		var reg=/^((13[0-9])|(14[5|7])|(15([0-3]|[7-9]))|(18[0,2-3,5-9]))\d{8}$/;
		console.log(val);
		if(val==""){
			$(this).css("border","1px solid #ff0036").addClass("change").next().show();
		}else{
			if(reg.test(val)){
				$(this).css("border","1px solid #ccc").next().show().html("√");							
			}else{
				$(this).css("border","1px solid #ff0036").next().show().html("x 手机号码格式不正确，请重新输入");
			}
			console.log(reg.test(val));
		}
		if(reg.test(val)){
			$("#btn").css("background","red").click(function(){
				$(".con_1").hide().next().show().find(".name span").html(val);
				$("header li:nth-child(2)").addClass("active");
			});
		}
	})
			
	$(".drag").mousedown(function(e){
		//drag();
		var _left=e.pageX-$(this).offset().left;
		var _top=e.pageY-$(this).offset().top;
		//console.log();
		/*$(document).mousemove(function(e){
			var wid=e.
			$(".drag").css({"left":_left,"top":_top});
		})*/
		return false;
	})
	
	$("#psw1").focus(function(){
		$(".msg1").show();
		$(this).keydown(function(){
			var val=$(this).val();		
			var sum=0;
			var flag1=flag2=flag3=false;
			for(var i in val){
				var code=val.charCodeAt(i);
				if(code>=48 &&code<=57){
					flag1=true;
				}
				if(code>=65 && code<=90 ||code>=97 &&code<=122){
					flag2=true;
				}
				if(code==95){
					flag3=true;
				}
			}
			sum=flag1+flag2+flag3;
			switch(sum){
				case 3:
					//$(this).style.background="#f99";
					$(".msg1 p span:nth-child(3)").css("background","#f99");
				case 2:
					$(".msg1 p span:nth-child(2)").css("background","#9f9");
				case 1:
					$(".msg1 p span:nth-child(1)").css("background","#99f");
			};
		});		
	})
	$("#psw1").blur(function(){
		$(".msg1").hide();
	})
	$("#psw2").focus(function(){
		$(this).addClass("change").next().show();
	})
	$("#psw1").blur(function(){
		if($(this).val()===$("#psw1").val()){
			$(".msg2").show().html("√").css("color","#008000");
		}
	});
	$("#txt2").focus(function(){
		$(this).addClass("change").next().show();
	})
	$("#txt2").blur(function(){
		$(this).next().hide();
	});
	$("#btn3").click(function(){
		$(".con_2").hide().next().show();
		$("header li:last-child").addClass("active");
	})
	
})
		
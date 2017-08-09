$(function() {
	$("header").load("top.html");
	$("footer").load("foot.html");
	//cookie
	var str2 = Cookies.get("cart");
	var obj = str2 ? JSON.parse(str2) : {};
	var sum = 0;
	console.log(obj)
	for(var i in obj) {
		//console.log(obj[i]);
		sum += obj[i];
	}
	$(".top_cart span").text(sum);
	$(".tot .shu").text(sum);
	$.ajax({
		type: "get",
		url: "json/list.json",
		async: true,
		success: function(data) {

			data = data.mainList;
			console.log(data)	

			var str2 = Cookies.get("cart");
			var obj = str2 ? JSON.parse(str2) : {};
			var obj2={};
			var arr=[];
			var arr2=[];
			//显示购物详情
			for(var i in obj) {			
				for(var j in data) {
					if(data[j].id == i) {																															
						arr.push(data[j]);
						arr2.push(obj[i]);//保存数量
					}					
				}
			};
			if(obj2.lit==undefined){
				obj2.lit=arr;
			}
			//console.log(obj2,arr2);
			var html = template("detail",obj2);
			$(".choice_c").html(html);
			
			
			//单价、数量获取
			$(".price").each(function(){
				var index=$(this).parents(".list_d").index();//获取li下标
				var a=arr2[index];
				$(this).siblings(".num").find("input").val(a);
				var prePrice = parseFloat($(this).html().substring(1));//去掉美元符号				
				var mul = (prePrice * a).toFixed(2); //保留2位小数
			    $(this).siblings(".cal").html("￥" + mul);	
			    console.log(index)
			})
												
			addLis();

		}

	});

	function addLis(){
		$(".tot li:not(:last)").hover(function() {
			$(this).css("border-bottom", "2px solid #ff0036").siblings().css("border", "0");
		});
		
		$(".list_d .num").find("em").click(function() {
			var sign = $(this).html();
			var prePrice = parseFloat($(".price").html().substring(1));
			var num = parseInt($(this).siblings("input").val());
			//商品id已当自定义属性添加给了input
			var proId=$(this).siblings("input").attr("data-id");
			console.log($(this).index());			
						
			if(sign == "-") {
				num = num - 1;
				num = num < 1 ? 1 : num;
				$(this).siblings("input").val(num);
			} else {
				num = num + 1;
				$(this).siblings("input").val(num);
			}
			var mul = (prePrice * num).toFixed(2); //保留2位小数
			$(this).parents(".num").siblings(".cal").html("￥" + mul);
						
			setCookie(proId,num);
			
			//判断是否需要结算
			var summ=0;
			var count=0;//保存不同商品
			$(".list_d").each(function(){				
				if($(this).find("i").html()!=""){
					var rmb = parseFloat($(this).find(".cal").text().substring(1));
					summ+=rmb;	
					count++;
					$(".right a").css("background","#F56A00");
				}else{
					$(".right a").css("background","#b0b0b0");
				}
				console.log(count);
				$(".right .sum").html(count);
				$(".right .money").html(summ.toFixed(2));
				
			})
			
			return false;
			
		});
		
		//弹出层 删除
		$(".coll").find(".remove").click(function() {
			var _this = $(this);
			var proId = $(this).parents(".list_d").find("input").attr("data-id");
			console.log(proId)
			$(".cover").show().find("a").click(function() {
				var index = $(this).index();
				if(index == 2) {
					remoCookie(proId);//移除COOKIE					
					_this.parents(".list_d").remove();
           			$(".cover").hide();
				}
				if(index == 3) {
					$(".cover").hide();
				}
				//判断是否需要结算
				var summ=0;
				var count=0;//保存不同商品
				$(".list_d").each(function(){				
					if($(this).find("i").html()!=""){
						var rmb = parseFloat($(this).find(".cal").text().substring(1));
						summ+=rmb;	
						count++;
						$(".right a").css("background","#F56A00");
					}else{
						$(".right a").css("background","#b0b0b0");
					}
					console.log(count);
					$(".right .sum").html(count);
					$(".right .money").html(summ.toFixed(2));
					
				})
				
				
			});
			
			
						
		});
		
		
		$(".cover").find("i").click(function() {
			$(".cover").hide();
		});
		
		
		//侧边
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			if(scroll != 0) {
				$("aside a").eq(0).css("display", "block");
				$("aside a").on("click", "span", function() {
					$("body,html").stop().animate({
						"scrollTop": 0
					}, 500);
				})
			} else {
				$("aside a").eq(0).css("display", "none");
			}

		});
		$("aside a").hover(function() {
			$(this).find("span").show();
		}, function() {
			$(this).find("span").hide();
		});

		//全选
		//点击店铺
		$(".store").click(function(){
			var gou=$(this).find("i").html();
			if(gou==""){
				$(this).find("i").html("&#10004").end().next().css("background", "#FFEFBC").find("i").html("&#10004");
								
			}else{
				$(this).find("i").html("").end().next().css("background","#fff").find("i").html("");
			}
			
			//判断是否需要结算
			var summ=0;
			var count=0;//保存不同商品
			$(".list_d").each(function(){				
				if($(this).find("i").html()!=""){
					var rmb = parseFloat($(this).find(".cal").text().substring(1));
					summ+=rmb;	
					count++;
					$(".right a").css("background","#F56A00");
				}else{
					$(".right a").css("background","#b0b0b0");
				}
				console.log(count);
				$(".right .sum").html(count);
				$(".right .money").html(summ.toFixed(2));
				
			})
			
		})
		
		$(".goods .list_d i").click(function(){
			var gou=$(this).html();
			if(gou==""){
				$(this).html("&#10004").parents(".list_d").css("background", "#FFEFBC");								
			}else{
				$(this).html("").parents(".list_d").css("background","#fff");
			}
			
			//判断是否需要结算
			var summ=0;
			var count=0;//保存不同商品
			$(".list_d").each(function(){				
				if($(this).find("i").html()!=""){
					var rmb = parseFloat($(this).find(".cal").text().substring(1));
					summ+=rmb;	
					count++;
					$(".right a").css("background","#F56A00");
				}else{
					$(".right a").css("background","#b0b0b0");
				}
				console.log(count);
				$(".right .sum").html(count);
				$(".right .money").html(summ.toFixed(2));
				
			})
			
			
		})
		
		

	}
	
	//保存COOKIE
	function setCookie(proId,nums){
		var str=Cookies.get("cart");
		var obj = str ? JSON.parse(str):{};
		//同种商品加数量，不同商品添属性
		if(obj[proId]==undefined){
			obj[proId]  = 1;
		}else{
			obj[proId] = nums;
		}
		var objToStr = JSON.stringify(obj);//转换成json形式存cookie；					
		Cookies.set("cart",objToStr,{ expires: 7});
				
	}
	
	//移除cookie
	function remoCookie(proId){
		var cartArr=JSON.parse(Cookies.get("cart"));
		delete cartArr[proId];//对象删除某个属性和对应的值
		console.log(cartArr,cartArr[proId],cartArr)
		Cookies.set("cart",JSON.stringify(cartArr),{ expires: 7});		
	}


})
$(function(){
	$("header").load("index.html");
	$(".tot li:not(:last)").hover(function(){
		$(this).css("border-bottom","2px solid #ff0036").siblings().css("border","0");
	});
	$(".num").find("em").click(function(){
		var sign=$(this).html();
		var prePrice=parseFloat($(".price").html().substring(1));		
		var num=parseInt($(this).siblings("input").val());
		console.log(prePrice);
		if(sign=="-"){			
			num=num-1;
			num= num<1? 1:num;
			$(this).siblings("input").val(num);							
		}else{
			num=num+1;
			$(this).siblings("input").val(num);
		}
		var mul=(prePrice*num).toFixed(2);//保留2位小数
		$(".cal").html("￥"+mul);
	});
	/*$(".coll").find("a:nth-child(2)").click(function(){
		
	})*/
})

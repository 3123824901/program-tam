$(function(){
	$("header").load("index.html");
	$("footer").load("foot.html");
	$("nav ul").find("li:first").hover(function(){
		$(this).find("a").html("所有宝贝");
	},function(){
		$(this).find("a").html("全部商品分类");
	});
	$("#middleArea").mousemove(function(e){
		var x=e.pageX-$(this).offset().left-$("#zoom").width()/2;
		var y=e.pageY-$(this).offset().top-$("#zoom").height()/2;			
		if(x>=$(this).width()-$("#zoom").width()){
			x=$(this).width()-$("#zoom").width();
		}
		if(x<$("#zoom").width()/2){
			x=0;
		}
		if(y>=$(this).height()-$("#zoom").height()){
			y=$(this).height()-$("#zoom").height();
		}
		if(y<$("#zoom").height()/2){
			y=0;
		}
		$(this).find("#zoom").show().css({"left":x,"top":y});
		$("#bigArea").show().find("img").css({"left":-(x/$("#middleArea").width()*$("#bigArea").find("img").width()),
		"top":-(y/$("#middleArea").height()*$("#bigArea").find("img").height())});
	});
	$("#middleArea").mouseleave(function(){
		$("#zoom").hide();
		$("#bigArea").hide();
	});
	$(".act1").click(function(){
		var value=$(this).prev().val();
		value=parseInt(value)+1;//string转换成number
		$(this).prev().val(value);
	});
	$(".act2").click(function(){		
		var value=$(this).prev().prev().val();
		value=parseInt(value)-1;//string转换成number
		$(this).prev().prev().val(value);
		if(value==0){
			$(this).prev().prev().val("1");
		};		
	});
	$(".chose p").find("a").click(function(){
		$(this).css("border","2px solid #ff0036").find("em").css("border",0).end().siblings().css("border",0).find("em").css("border","1px solid #ccc");
	});
	$(".matchNav li").click(function(){	
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		var preWid=$(".matchCon li").width();
		console.log(preWid,-index*preWid)
		$(".matchCon").css("left",-index*preWid);
	});
	$(".artList li").click(function(){
		var index=$(this).index();
		$(this).addClass("active").siblings().removeClass();
		$(".contain li").eq(index).addClass("active").siblings().removeClass();
	})
	$.ajax({
		type:"get",
		url:"https://rate.tmall.com/list_detail_rate.htm?itemId=530887156042&spuId=566481004&sellerId=1614874856&order=3&currentPage=1&append=0&content=1&tagId=&posi=&picture=0&ua=225UW5TcyMNYQwiAiwQRHhBfEF8QXtHcklnMWc%3D%7CUm5Ockp3SHVKdEF6TnZNdiA%3D%7CU2xMHDJ7G2AHYg8hAS8WLgAgDlIzVTleIFp0InQ%3D%7CVGhXd1llXWBfYl1jVm1ZYVphVmtJfUZ9QXVOd0N%2BR39DeExySmQy%7CVWldfS0RMQ87BSUdPRN6UXFObkAWQA%3D%3D%7CVmhIGCQbJQU4GCQdIhw8BDoEMREtFC0QMAQ5BCQYIRglBTALNmA2%7CV29PHzFxJXwVaAVZOEUlaQhsEXwHbgpuUmpXaFVqVGFYYV5qVXtbCzULPh4iGSwWQGBdfVN9XWJWaVcBVw%3D%3D%7CWGFcYUF8XGNDf0Z6WmRcZkZ%2FX2NXAQ%3D%3D&isg=AjAwbxFhHbT28MFI7Z6BFAiDAf6IcixPqZZb-iqDmgte5dOP0oiZUweXSfBt&itemPropertyId=&itemPropertyIndex=&userPropertyId=&userPropertyIndex=&rateQuery=&location=&needFold=0&_ksTS=1502023872675_2572&callback=?",
		async:true,
		dataType:"jsonp",
		success:function(data){
			console.log(data);
			var html = template("comBox",data);
			$(".comBox").html(html);
		}
	});
	
	$(".checkBox input:nth-child(1)").click(function(){
		$.ajax({
			type:"get",
			url:"https://rate.tmall.com/list_detail_rate.htm?itemId=530887156042&spuId=566481004&sellerId=1614874856&order=3&currentPage=1&append=0&content=1&tagId=&posi=&picture=0&ua=225UW5TcyMNYQwiAiwQRHhBfEF8QXtHcklnMWc%3D%7CUm5Ockp3SHVKdEF6TnZNdiA%3D%7CU2xMHDJ7G2AHYg8hAS8WLgAgDlIzVTleIFp0InQ%3D%7CVGhXd1llXWBfYl1jVm1ZYVphVmtJfUZ9QXVOd0N%2BR39DeExySmQy%7CVWldfS0RMQ87BSUdPRN6UXFObkAWQA%3D%3D%7CVmhIGCQbJQU4GCQdIhw8BDoEMREtFC0QMAQ5BCQYIRglBTALNmA2%7CV29PHzFxJXwVaAVZOEUlaQhsEXwHbgpuUmpXaFVqVGFYYV5qVXtbCzULPh4iGSwWQGBdfVN9XWJWaVcBVw%3D%3D%7CWGFcYUF8XGNDf0Z6WmRcZkZ%2FX2NXAQ%3D%3D&isg=AjAwbxFhHbT28MFI7Z6BFAiDAf6IcixPqZZb-iqDmgte5dOP0oiZUweXSfBt&itemPropertyId=&itemPropertyIndex=&userPropertyId=&userPropertyIndex=&rateQuery=&location=&needFold=0&_ksTS=1502023872675_2572&callback=?",
			async:true,
			dataType:"jsonp",
			success:function(data){
				console.log(data);
				var html = template("comBox",data);
				$(".comBox").html(html);
			}
		});
	})
	$(".checkBox input:nth-child(2)").click(function(){
		$.ajax({
			type:"get",
			url:"https://rate.tmall.com/list_detail_rate.htm?itemId=530887156042&spuId=566481004&sellerId=1614874856&order=3&currentPage=1&append=1&content=1&tagId=&posi=&picture=0&ua=161UW5TcyMNYQwiAiwQRHhBfEF8QXtHcklnMWc%3D%7CUm5Ockp3SHVKdEF7RH9Hfyk%3D%7CU2xMHDJ7G2AHYg8hAS8WLgAgDlIzVTleIFp0InQ%3D%7CVGhXd1llXWBfYl1jVmxTaFBoX2JAdEt%2BR3xCeUd5THZLcUx3WQ8%3D%7CVWldfS0QMAg8BiYaIQEvEDQfVjh9DGANYQdEJVgiS2UzZQ%3D%3D%7CVmhIGCQbJQU4GCQdIhw8BD4EPh4iGyIfPws2CysXLhcqCj8EOW85%7CV25OHjAePgs1Di4SJxkiAj4BOQdRBw%3D%3D%7CWGFBET9UM1UoRSNecFBsUmhUdEhySHJSalZjXGhSajxq%7CWWBAED4QMAowBCQYLRIrCzMPOgM%2FAT9pPw%3D%3D%7CWmNDEz1WMVcqRyFcclJuV2tUdEhyTHNTa1diW25WaD5o%7CW2JCEjwSMgo%2FAyMfJBEuDjYKPwc4DTRiNA%3D%3D%7CXGVFFTtQN1EsQSdadFRpSXVAdU5uVmpeY1ZiWgxa%7CXWREFDoUNAo0CysXLRIoCDAMOAY8BD5oPg%3D%3D%7CXmZGFjh4LHUcYQxQMUwsZx5nCmwAPAQ5BjsEOg82DzAEOxU1ZVtuV3dLcEV6LAwxET8RMQk1ATgGMwZQBg%3D%3D%7CX2ZbZkZ7W2REeEF9XWNbYUF4WGRZeU1tWHhCYll5QWFYeER7LQ%3D%3D&isg=AkdHqiJ00ll1kFYtPot-aevu1vsbRyOi6uusnxk26Vb9iGNKIR35fgQKXlU-&itemPropertyId=&itemPropertyIndex=&userPropertyId=&userPropertyIndex=&rateQuery=&location=&needFold=0&_ksTS=1502029067190_2593&callback=?",
			async:true,
			dataType:"jsonp",
			success:function(data){
				console.log(data);
				var html = template("comBox",data);
				$(".comBox").html(html);
			}
		});
	})
	$(".checkBox input:nth-child(3)").click(function(){
		$.ajax({
			type:"get",
			url:"https://rate.tmall.com/list_detail_rate.htm?itemId=530887156042&spuId=566481004&sellerId=1614874856&order=3&currentPage=1&append=0&content=1&tagId=&posi=&picture=1&ua=022UW5TcyMNYQwiAiwQRHhBfEF8QXtHcklnMWc%3D%7CUm5Ockp3SHVKfkF%2FSnNLcCY%3D%7CU2xMHDJ7G2AHYg8hAS8WLgAgDlIzVTleIFp0InQ%3D%7CVGhXd1llXWBfYl1pVmhdZFxnUG1Pek56RnxDekRwSndPd0J%2FR2k%2F%7CVWldfS0QMAo0CSkVIAAuUylqAHwGSWJCfFxgRRM3CipJZzFn%7CVmhIGCQbJQU4GCQdIhw8BDEJMhIuFy4TMwc6BycbIhsmBjMINWM1%7CV25OHjAePgc5BCQYLRAkBDoDOwdRBw%3D%3D%7CWGFBET8RMQgzCSkVLhQsDDIGMwZQBg%3D%3D%7CWWFBET9%2FK3IbZgtXNksrcBF6B3sAbVFpVGtWaVdiW2JdaVZ4WAgxCTERLRYjHEpqV3dZd1duUGtVA1U%3D%7CWmNeY0N%2BXmFBfUR4WGZeZER9XWFcfEhoVG44&isg=Av7-BVOnKy6hxX_y75i33mrtTxRKNPo1y8hFoKgDlsE8S5klEM5vyV9ptwpv&itemPropertyId=&itemPropertyIndex=&userPropertyId=&userPropertyIndex=&rateQuery=&location=&needFold=0&_ksTS=1502029242950_2681&callback=?",
			async:true,
			dataType:"jsonp",
			success:function(data){
				console.log(data);
				var html = template("comBox",data);
				$(".comBox").html(html);
			}
		});
	})
})

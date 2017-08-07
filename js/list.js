$(function(){
	//$("#header").load("index.html");
	$("footer").load("foot.html");
	$(".btn").click(function(){
		$(".sN_c ul li:nth-child(4)").nextAll().toggle();
	});
	$.ajax({
	    type: "GET",
	    url:"json/list.json",
	    success: function(data){	
	    	var data2=data.mainList.slice(0,15);
	    	var data3={"mainList":data2};
	    	console.log(data3)
			var html = template("navCon",data3);
			$(".list ul").html(html);
	    }
	});
	$(".page").find("a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		var len=5;//a标签个数
		console.log($(this).eq(0).val());
		$.getJSON("json/list.json",function(data){
			var len1= data.mainList.length; //数据总长度
			var numPerPage = 15; //每一页显示的条数				
			var pages = Math.ceil(len1/numPerPage);//总页数				
			var k=0;//控制页码			
			console.log(len,index,pages);
			switch(index){
				case 0: //点击上一页时，如果不在第一页，页码减1
					k = k-1;
					break;
				case len-1://点击下一页时，如果不在最后一页，页码加1
					if(k<pages-1){
						k = k + 1;
					}
					break;								
				default: //点击具体的页码时，当前下标+1								
					k = index - 1;
			}	
				//$(this).end().find("a").eq(k).css("background","#ccc").end().find("a").css("background","#fff");
				$(this).end().find("a").eq(k).css("background","#ccc");
				var data2=data.mainList.slice(k*numPerPage,k*numPerPage+15);
			    var data3={"mainList":data2};
				var html = template("navCon",data3);
				$(".list ul").html(html);
		})

	})
	
})

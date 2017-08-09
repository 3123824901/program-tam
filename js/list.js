$(function() {
	$("#top").load("top.html");
	$("footer").load("foot.html");
	$(".btn").click(function() {
		$(".sN_c ul li:nth-child(4)").nextAll().toggle();
	});
	$("#head #logo").click(function() {
		location.assign("index.html");
	})
	
	$.ajax({
		type: "GET",
		url: "json/list.json",
		success: function(data) {
			
			var html = template("navCon", data);
			$(".list ul").html(html);

			pagefy(data);
			
		}
	});

	function pagefy(data) {
		var len1 = data.mainList.length; //数据总长度
		var numPerPage = 15; //每一页显示的条数				
		var pages = Math.ceil(len1 / numPerPage); //总页数				
		var k = 0; //控制页码			
		var oPage = document.getElementsByClassName("page")[0];
		var aPage = oPage.getElementsByTagName("a");
		var alen = aPage.length; //所有a标签长度
		console.log(alen);
		for(let i = 0; i < alen; i++) {
			aPage[i].onclick = function(){
				switch(i) {
					case 0: //点击上一页时，如果不在第一页
						if(k>0){
							k=k-1
						}
						break;
					case alen - 1: //点击下一页时，如果不在最后一页，页码加1
						if(k < pages - 1) {
							k = k + 1;
						}
						break;
					default: //点击具体的页码时，当前下标+1							
						k = i - 1;	
				}
				//添加高亮，先同一清除，再具体添加						
				for(var m = 0; m < aPage.length; m++){
					aPage[m].className = "";
				}						
				aPage[k+1].className = "active";
				//通过页码显示对应的数据														
				var newdata=data.mainList.slice(k*numPerPage,(k*numPerPage+15));//截取，控制每页显示15条
				newdata={"mainList":newdata};//人为添加属性，方便取值
				console.log(newdata);
				var html = template("navCon", newdata);
				$(".list ul").html(html);
				
				$(window).scrollTop(0);//控制页面刷新后永远在顶部
								
				return false;						
			}
	
		}
		
		$("#page_btn").click(function(){			
			var page_num=parseInt($("#page_txt").val()-1);
			
			var newdata=data.mainList.slice(page_num*numPerPage,(page_num*numPerPage+15));//截取，控制每页显示15条
			newdata={"mainList":newdata};//人为添加属性，方便取值
			console.log(newdata);
			var html = template("navCon", newdata);
			$(".list ul").html(html);
			
			$("#nums").find("a").eq(page_num).addClass("active").siblings().removeClass("active");
			$(window).scrollTop(0);//控制页面刷新后永远在顶部
			$("#page_txt").val("");
		})
				
	}
})
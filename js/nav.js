$(function(){
	$(".dl").on("mouseenter","dd",function(){		
		$(".show-content").show();
		var index = $(this).index();
		console.log(index)
		$.get("json/nav_data.json",function(data){			
			//var data=data[index];
			console.log(data.left);
			var html = template("show-content",data);	
			$(".hot-word-line").html(html);
		});
	})
	/*$("#nav").on("mouseleave",function(){
		$(".navCon").hide();
	})*/
	
	$.get("json/nav.json",function(data){
		var html = template("nav1",data);
		console.log(data);
		$("#nav dl").html(html).prepend('<dt><i>&#xe606;</i>商品分类</dt>');		
	})
	
	
})

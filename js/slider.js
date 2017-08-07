;(function($){
	$.fn.slider=function(opts){
		var defaults={
			width:760,
			height:300,
			top:0,
			direction:"left",
			interval:3000,
			showNav:false,
			showBtns:false
		}
		var options=$.extend(true,{},defaults,opts);
		
		function Slider(options){
			this.ele=$("#sliderBox");
			this.lists=$("#sliderList");
			this.navs=$("#sliderNav");
			this.btns=$("#sliderBtns");
			this.lists.find("li").eq(0).clone(true).appendTo(this.lists);
			this.list=this.lists.find("li");
			this.nav=this.navs.find("li");
			this.ele.css({"width":options.width,"height":options.height});
			this.list.css({"width":options.width,"height":options.height});
			this.list.find("img").css({"width":options.width,"height":options.height});
			this.btns.find(".btn").css("top",((options.height/2)-20));
			switch(options.direction){
				case "left":
					this.leftRight();
					break;
				default:
					this.topBottom();
			}
			if(options.showNav){
				this.navs.show();
			};
			if(options.showBtns){
				this.btns.show();
			};
		};
		Slider.prototype.leftRight=function(){
			this.list.css("float","left");
			this.lists.css({"width":this.list.length*options.width,"height":options.height,"top":options.top});
			this.timer=setInterval(move,options.interval);
			var _this=this;
			var index=0;
			function move(){
				index++;
				if(index==_this.list.length){
					_this.lists.css("left",0);
					index=1;
				};
				if(index==_this.list.length-1){
					_this.nav.eq(0).addClass("hover").siblings().removeClass("hover");
				}else{
					_this.nav.eq(index).addClass("hover").siblings().removeClass("hover");
				};	
				if(index==-1){
					_this.lists.css("left",(-(_this.list.length-1))*options.width);
					index=_this.list.length-2;								
				}
				_this.lists.stop().animate({"left":-index*options.width},1000)							
			};						
			this.nav.hover(function(){
				clearInterval(_this.timer);
				index=$(this).index()-1;
				move();
			},function(){
				_this.timer=setInterval(move,options.interval);
			});						
			this.btns.find(".btn").eq(0).click(function(){
				clearInterval(_this.timer);							
				index=index-2;
				move();
				_this.timer=setInterval(move,options.interval);							
			})
			this.btns.find(".btn").eq(1).click(function(){
				clearInterval(_this.timer);							
				move();
				_this.timer=setInterval(move,options.interval);
			})						
		};
		
		Slider.prototype.topBottom=function(){
			this.timer=setInterval(move,options.interval);
			var _this=this;
			var index=0;
			function move(){
				index++;
				if(index==_this.list.length){
					_this.lists.css("top",0);
					index=1;
				};
				if(index==_this.list.length-1){
					_this.nav.eq(0).addClass("hover").siblings().removeClass("hover");
				}else{
					_this.nav.eq(index).addClass("hover").siblings().removeClass("hover");
				};
				_this.lists.stop().animate({"top":-index*options.height},1000)							
			};						
			
		}					
		new Slider(options);
		return this;
	}
})(jQuery)

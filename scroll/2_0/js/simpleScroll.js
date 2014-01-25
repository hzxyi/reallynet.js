// ¹ö¶¯widget
function simplescroll(c, config)
{
	this.config = config ? config : {start_delay:3000, speed: 23, delay:4000, scrollItemCount:1,movecount:1};
	this.container = $(c);
	this.pause = false;
	var _this = this;
	
	this.init = function() {
		_this.scrollTimeId = null;
		setTimeout(_this.start,_this.config.start_delay);
	}
	
	this.start = function() {
		var d = _this.container;
		var line_height = d.getElementsByTagName('li')[0].offsetHeight;
		if(d.scrollHeight-d.offsetHeight>=line_height) _this.scrollTimeId = setInterval(_this.scroll,_this.config.speed)
	};
	
	this.scroll = function() {
		if(_this.pause)return;
		var d = _this.container;d.scrollTop+=2;
		var line_height = d.getElementsByTagName('li')[0].offsetHeight;
		//alert(d.scrollTop + "%" + line_height + " : " + d.scrollTop%line_height);
		if(d.scrollTop%(line_height*_this.config.scrollItemCount)<=1){
			if(_this.config.movecount != undefined)
				for(var i=0;i<_this.config.movecount;i++){d.appendChild(d.getElementsByTagName('li')[0]);}
			else for(var i=0;i<_this.config.scrollItemCount;i++){d.appendChild(d.getElementsByTagName('li')[0]);}
			d.scrollTop=0;
			clearInterval(_this.scrollTimeId);
			setTimeout(_this.start,_this.config.delay);
		}
	}
	
	this.container.onmouseover=function(){_this.pause = true;}
	this.container.onmouseout=function(){_this.pause = false;}
}
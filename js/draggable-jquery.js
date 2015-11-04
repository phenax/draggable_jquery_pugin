(function($) {
	$.fn.draggable = function() {
		var $item = this;

		/*
		var padding = ($item.css('padding')).split(" ");
		var width = parseInt($item.width()) + 2*parseInt(padding[1]);
		var height = parseInt($item.width()) + 2*parseInt(padding[0]);
		*/
		var move_func = function(e) {
			var x = e.pageX;
			var y = e.pageY;
			$item.css({
				'transform':'translate('+x+'px,'+y+'px)'
			});
		};

		var move_listeners = function(move) {
			if(move == "start") {
				$(document).on('mousemove',move_func);
			} else if(move == "stop") {
				$(document).off('mousemove',move_func);
			}
		};

		var initiate = function(e) {
			/*
			var onX = e.pageX - $item.offset().left;
			var onY = e.pageY - $item.offset().top;
			var x = parseInt((onX)*100/width);
			var y = parseInt((onY)*100/height);
			console.log(x+"::"+y);
			*/
			$item.css({
				//'transform-origin':x+'% '+y+'%',
				'cursor':'move'
			});
			move_listeners("start");
		};

		var endmove = function() {
			move_listeners("stop");
			$item.css('cursor','pointer');
		};
		
		$(document).ready(function() {
			$item.on('mousedown',initiate);
			$(document).on('mouseup',endmove);
		});
	};
})(jQuery);
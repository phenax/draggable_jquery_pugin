(function($) {
	$.fn.dragging = function() {
		var $item = this;

		var move_func = function(e) {
			var x = e.pageX;
			var y = e.pageY;
			$item.css({
				'transform':'translate('+x+'px,'+y+'px)',
				'cursor':'move'
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
			move_listeners("start");
		};

		var endmove = function() {
			move_listeners("stop");
		};
		
		$(document).ready(function() {
			$item.on('mousedown',initiate);
			$(document).on('mouseup',endmove);
		});
	};
})(jQuery);

$('#boxMove').dragging();
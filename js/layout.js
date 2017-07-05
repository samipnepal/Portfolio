AOS.init();
$(window).scroll(function () {
	if ($(this).scrollTop() > 10) {
		$(".navbar-me").addClass("fixed-me");
	} else {
		$(".navbar-me").removeClass("fixed-me");
	}

});

$(function () {
	$('.chart').appear();
	$(document.body).one('appear', '.chart', function (e, $affected) {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 10,
			lineCap: 'butt',
			barColor: 'rgba(239, 71, 9, 0.96)',
			trackColor: "#faead6",
			size: 160,
			animate: 5000
		});
	});

	$('#yadab-stat').appear();
	$(document.body).one('appear', '#yadab-stat', function (e, $affected) {
		$(".stat-count").each(function () {
			$(this).data('count', parseInt($(this).html(), 10));
			$(this).html('0');
			count($(this));
		});
	});
});
function count($this) {
	var current = parseInt($this.html(), 10);
	current = current + 1;
	$this.html(++current);
	if (current > $this.data('count')) {
		$this.html($this.data('count'));
	} else {
		setTimeout(function () {
			count($this)
		}, 200);
	}
}

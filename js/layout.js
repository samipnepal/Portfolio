$(window).scroll(function () {
	if ($(this).scrollTop() > 10) {
		$(".navbar-me").addClass("fixed-me");
	} else {
		$(".navbar-me").removeClass("fixed-me");
	}

	if (checkVisible($('#yadab-stat'))) {
       $(".stat-count").each(function () {
			$(this).data('count', parseInt($(this).html(), 10));
			$(this).html('0');
			count($(this));
		});
    } else {
     
    }
});

function checkVisible(elm, eval) {
	eval = eval || "object visible";
	var viewportHeight = $(window).height(), // Viewport Height
		scrolltop = $(window).scrollTop(), // Scroll Top
		y = $(elm).offset().top,
		elementHeight = $(elm).height();

	if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
	if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}
function count($this) {

	var current = parseInt($this.html(), 10);
	current = current + 1;
	$this.html(++current);
	if (current > $this.data('count')) {
		$this.html($this.data('count'));
	} else {
		setTimeout(function () {
			count($this)
		}, 10);
	}
}

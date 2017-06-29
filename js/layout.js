$(window).scroll(function() {
    if($(this).scrollTop()>10) {
        $( ".navbar-me" ).addClass("fixed-me");
    } else {
        $( ".navbar-me" ).removeClass("fixed-me");
    }
});
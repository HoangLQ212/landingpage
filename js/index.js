$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
console.log(scroll);
    if (scroll > 1) {
        $(".first-hotline").addClass("fixed");
    } else {
        $(".first-hotline").removeClass("fixed");
    }
});
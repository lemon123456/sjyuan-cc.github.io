$( document ).ready(function() {
    backToTop();
});


function backToTop() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $("#back-to-top").fadeIn(500);
        } else {
            $("#back-to-top").fadeOut(500);
        }
    });

    $("#back-to-top").click(function () {
        $("body,html").animate({
            scrollTop: "0"
        }, 500);
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
}




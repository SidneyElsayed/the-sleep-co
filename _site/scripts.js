$(document).ready(function() {
    $(".hamburger-button").click(function() {
        $(this).toggleClass("active");
        $(".mob-menu").fadeToggle()
    });


    // Animate on Scroll Activate
    AOS.init({
        duration: 500
    });

});
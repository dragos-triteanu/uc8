$(document).on("ready", function(){

    $("#contactButton").on("click", function(){
        $(".contact-overlay").fadeIn();
        $(".main-section").hide();
    });

    $("#closeContactButton").on("click",function(){
        $(".contact-overlay").hide();
        $(".main-section").fadeIn();
    });
});
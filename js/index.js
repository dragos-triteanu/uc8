$(document).on("ready", function(){

    $("#contactButton").on("click", function(){
        $(".contact-overlay").fadeIn();
        $(".main-section").hide();
    });

    $("#closeContactButton").on("click",function(){
        $(".contact-overlay").hide();
        $(".main-section").fadeIn();
    });

    $("#contact-form").on("submit",function(e){
        e.preventDefault();

        $("#send-message-button").prop("disabled",true);
        var name = $("#name-input").val();
        var email = $("#email-input").val();
        var message = $("#message-input").val();
        sendTheMail(name,email,message);


        return false;
    });


    function sendTheMail(name,email,message){
        $.ajax({
            url: "http://localhost:8089/sendEmail",
            type: "POST",
            dataType: "application/x-www-form-urlencoded",
            data : {
                name: name,
                email: email,
                text: message
            },
            // cache: false,
            success: function(response) {
                console.log(response);
            },
            error: function(response) {
                console.log(response);
                $("#send-message-button").prop("disabled",false);
            },
            complete: function(){
                $(".contact-overlay").hide();
                $(".main-section").fadeIn();
                $("#name-input").val("");
                $("#email-input").val("");
                $("#message-input").val("");
            }
        });
    }

});
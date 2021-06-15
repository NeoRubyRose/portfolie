$(function(){
    $("#readmore").click(function(){
        $("#ekstra").slideToggle(500, function(){
            if($("#ekstra").is(":visible")){
                $("#readmore").text("Read less..");
            }else{
                $("#readmore").text("Read more...");
            }
        });
    });
    });
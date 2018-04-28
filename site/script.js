console.log("script.js is Connected!")

$(document).ready(function(){

// HOVER SCRIPT

    $(".left-block").hover(function(){
        $(this).css("background-color", "#5870d8");
        }, function(){
        $(this).css("background-color", "#3a3a3a");
    });
    $(".right-block").hover(function(){
        $(this).css("background-color", "#d85858");
        }, function(){
        $(this).css("background-color", "#7a7a7a");
    });

// SLIDE SCRIPT

    $(".right-block").click(function(){
        $(".right-panel").slideDown("slow");
    });
    $(".left-block").click(function(){
        $(".left-panel").slideDown("slow");
    });
});
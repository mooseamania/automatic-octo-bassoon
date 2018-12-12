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

// HIDE/SHOW SCRIPT

    $(".right-block").click(function(){
        $(".right-panel").show();
    });
    $(".left-block").click(function(){
        $(".left-panel").show();
    });
});

// SLIDE SCRIPT

    $(".first-button").click(function(){
        $(".second").slideDown("slow");
    });
    $(".second-button").click(function(){
        $(".third").slideDown("slow");
    });
    $(".third-button").click(function(){
    $(".fourth").slideDown("slow");
    });
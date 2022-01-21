//creating function to show and hide images
//using getElementById on manupulation
//to add function to toggle between the icons and the text
// introduction of a variable
//calling the function using alert();

$("document").ready(function () {
    $("#design-image").click(function() {
        $("#design-image").hide("2500");
        $("#design").show("2500");
    })
    $("#design").click(function() {
        $("#design").hide("2500");
        $("#design-image").show("2500")
    })
    $("#dev-image").click(function() {
        $("#dev-image").hide("2500");
        $("#dev").show("2500");
    })
    $("#dev").click(function() {
        $("#dev").hide("2500")       
        $("#dev-image").show("2500");
    })
    $("#product-image").click(function() {
        $("#product-image").hide("2500");
        $("#product").show("2500");
    })
    $("#product").click(function() {
        $("#product").hide("2500");
        $("#produt-image").show("2500");
    })
    //toggle function
    $("#work4").hover(function() {
        $("#mouse-hover1").toggle();
    });
    $("#work3").hover(function() {
        $("#mouse-hover2").toggle();
    });
    $("#work2").hover(function() {
        $("mouse-hover3").toggle();
    });
    $("#work1").hover(function() {
        $("#mouse-hover4").toggle();
    });
    $("#work5").hover(function() {
        $("#mouse-hover5").toggle();
    });
    $("#work6").hover(function() {
        $("#mouse-hover6").toggle();
    });
    $("#work7").hover(function() {
        $("#mouse-hover7").toggle();
    });
    $("#work8").hover(function() {
        $("#mouse-hover8").toggle();
    });

    //
    $("form#form1").submit(function(e){
        var name = $("#mce-NAME").val();
        e.preventDefault();
        alert("Hello!" + name + "Thank you for reaching out");
    })
});
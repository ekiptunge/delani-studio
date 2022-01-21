$('document').ready(function () {
    $("#design-image").click(function() {
        $("#design-image").hide("2000");
        $("#design").show("2000");
    })
    $("#design").click(function() {
        $("#design").hide("2000");
        $("#design-image").show("2000")
    })
    $("#dev-image").click(function() {
        $("#dev-image").hide("2000");
        $("#dev").show("2000");
    })
    $("#dev").click(function() {
        $("#dev").hide("2000");
        $("#dev-image").show("2000");
    })
    
})
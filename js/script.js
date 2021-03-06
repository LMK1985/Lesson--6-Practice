$(function() {

    var colors = ["red", "blue", "yellow", "green", "violet", "gray"];
    var bodyelm = $("body");
    var buttonelm = $(".btn"); 

    buttonelm.on("click", function() {
        var rannum = parseInt(Math.random() * colors.length);
        bodyelm.css("background-color", colors[rannum]);
    });

});
var second = 0;
var minutes = 0;
var hour = 0;
var d = new Date();

setInterval(function() {
    d = new Date();
    second = d.getSeconds() * 6;
    minutes = d.getMinutes() * 6;
    hour = d.getHours() * 30;
    document.getElementById("sc").style.transform = "rotate(" + second + "deg)";
    document.getElementById("mn").style.transform = "rotate(" + minutes + "deg)";
    document.getElementById("hr").style.transform = "rotate(" + hour + "deg)";

}, 1000);
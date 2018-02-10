var xoxo = setInterval(egor, 10);
var i = 0;
var el = document.getElementById("in");
function egor() {
    if (i<450){
        i++;
        el.style.marginTop = i+"px";
        el.style.marginLeft = i+ "px";
    } else (clearInterval(xoxo))
}
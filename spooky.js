function touchOn() {
    document.getElementById("boo").className = "blur:hover";
}

function touchOff() {
    document.getElementById("boo").className = "blur";
}

/*
function start() {
    document.getElementById("boo").addEventListener("touchstart", touchOn());
}

function end() {
    document.getElementById("boo").addEventListener("touchend", touchOff());
}


window.onload = function() {

    setInterval(function(){ start() }, 1000); //dynamic page - runs every 1 second
    setInterval(function(){ end() }, 1000); //dynamic page - runs every 1 second

}
*/

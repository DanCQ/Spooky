function touchOn() {
    document.getElementById("boo").className = "blur:hover";
}

function touchOff() {
    document.getElementById("boo").className = "blur";
}

function start() {
    document.getElementById("boo").addEventListener("touchstart", touchOn());
}

function end() {
    document.getElementById("boo").addEventListener("touchend", touchOff());
}


window.onload = function() {

    start();
    end();
   
}

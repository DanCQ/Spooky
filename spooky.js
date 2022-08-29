function touchOn() {
    document.getElementById("boo").className = "hover";
}

function touchOff() {
    document.getElementById("boo").className = "blur";
}

window.onload = function() {

    document.getElementById("boo").addEventListener("touchstart", touchOn());

    document.getElementById("boo").addEventListener("touchend", touchOff());
   
    //setInterval(function(){ timeStamp() }, 1000); //dynamic page - runs every 1 second
    
}

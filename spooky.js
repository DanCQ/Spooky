//creates a disappearing effect for the ghost

function vanishInky (){
    var ghost = document.getElementById("inky");

    if (ghost.className != "hide") {
        ghost.className = "hide";
        return ghost;
    } else {
        ghost.className = "";
        return ghost;
    }

}

function vanishBlinky (){
    var ghost = document.getElementById("blinky");

    if (ghost.className != "hide") {
        ghost.className = "hide";
        return ghost;
    } else {
        ghost.className = "";
        return ghost;
    }

}


//runs function after html document loads
window.onload = function() {

    setInterval(function(){ vanishInky() }, 5500) //runs every 5.5 seconds
    setInterval(function(){ vanishBlinky() }, 8500) //runs every 8.5 seconds

}




/*

I was trying to mimic the :hover response created with a mouse cursor on the screen, 
to work on a touchscreen using Javascript. It wasn't working.
I erased the event listener code in the html document.

I'm studying Javascript.
When I figure out what went wrong, I'll come back to fix it.
Hopefully by October.


function touchOn() {
    document.getElementById("boo").className = "blur:hover";
}

function start() {
    document.getElementById("boo").addEventListener("touchstart", touchOn());
}

function touchOff() {
    document.getElementById("boo").className = "blur";
}

function end() {
    document.getElementById("boo").addEventListener("touchend", touchOff());
}


*/

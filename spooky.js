//creates a disappearing effect for the ghost
function vanishPinky (){
    var ghost = document.getElementById("pinky");

    if (ghost.className != "hide") {
        ghost.className = "hide";
        return ghost;
    } else {
        ghost.className = "";
        return ghost;
    }

}

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

function vanishClyde (){
    var ghost = document.getElementById("clyde");

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

    setInterval(function(){ vanishPinky() }, 5500) //runs every 5.5 seconds
    setInterval(function(){ vanishInky() }, 7200) //runs every 7.2 seconds
    setInterval(function(){ vanishBlinky() }, 8400) //runs every 8.4 seconds
    setInterval(function(){ vanishClyde() }, 6600) //runs every 6.6 seconds

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

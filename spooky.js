
//Adds touchscreen response to Boo!
function spooky (){
    boo.ontouchstart = function () {
        var boo = document.getElementById("boo");
        boo.className = "blur:hover";
    };

    boo.ontouchend = function () {
        var boo = document.getElementById("boo");
        boo.className = "blur";
    };
}

//Disappears the ghost
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

    spooky();
    setInterval(function(){ vanishInky() }, 5500); //runs every 5.5 seconds
    setInterval(function(){ vanishBlinky() }, 8500); //runs every 8.5 seconds

};





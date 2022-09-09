/* //Don't know why this function is not working, trying to figure it out..

//Adds touchscreen support to Boo!
function spooky (){
    var boo = document.getElementById("boo");
    
    boo.ontouch = function () {
        if (boo.className != "blur:hover") {
            boo.className = "blur:hover";
            return boo;
        } else {
            boo.className = "";
            boo.className = "blur";
            return boo;
        }
    };
}
*/

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
    
    //spooky(); //on standy  
    setInterval(function(){ vanishInky() }, 5500); //runs every 5.5 seconds
    setInterval(function(){ vanishBlinky() }, 8500); //runs every 8.5 seconds

};


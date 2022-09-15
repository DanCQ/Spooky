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

//Disappears the ghost
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

//Ghost animation
function inkyAnimate() {
    var advance;
    var asset = document.getElementById("inky");
    var position = 0;
    var retreat;
    var snap;

    function snapBack() {
        position += 2;
        asset.style.left = position + "%";

        if (position >= 0) {
            clearInterval(snap);
            asset.style.position = "";
            asset.style.left = "";
            setTimeout(function() { inkyAnimate() }, 25000);
        }    
    }
    function animateBackward() {
        position -= 1;
        asset.style.left = position + "%";

        if (position < -45) {
            clearInterval(retreat);
            snap = setInterval(snapBack, 1);
        }
    }
    function animateForward() {
        position += 1;
        asset.style.left = position + "%";

        if (position > 155) {
            clearInterval(advance);
            retreat = setInterval(animateBackward, 15);
        }
    }
    asset.style.position = "absolute";
    advance = setInterval(animateForward, 20); //begin animation
}

//Ghost animation
function blinkyAnimate() {
    var advance;
    var asset = document.getElementById("blinky");
    var position = 0;
    var retreat;
    var snap;

    function snapBack() {
        position += 2;
        asset.style.right = position + "%";

        if (position >= 0) {
            clearInterval(snap);
            asset.style.position = "";
            asset.style.right = "";
            setTimeout(function() { blinkyAnimate() }, 22000);
        }    
    }
    function animateBackward() {
        position -= 1;
        asset.style.right = position + "%";

        if (position < -45) {
            clearInterval(retreat);
            snap = setInterval(snapBack, 1);
        }
    }
    function animateForward() {
        position += 1;
        asset.style.right = position + "%";

        if (position > 155) {
            clearInterval(advance);
            retreat = setInterval(animateBackward, 15);
        }
    }
    asset.style.position = "absolute";
    advance = setInterval(animateForward, 20); //begin animation
}


//runs function after html document loads
window.onload = function() {
    
    inkyAnimate();
    blinkyAnimate();
    
    setInterval(function(){ vanishInky() }, 5500); //runs every 5.5 seconds
    setInterval(function(){ vanishBlinky() }, 8500); //runs every 8.5 seconds

};
// jumpscare when user clicks on boo word
const boo = document.getElementById("boo");
const jumpscare1 = document.querySelector(".jumpscare1");

boo.addEventListener("click", function () {
    
    jumpscare1.classList.add("jumpscare-active-class");
    
    
    setTimeout(function () {
        jumpscare1.classList.remove("jumpscare-active-class");
    }, 2000);
    
    let mySound = new Audio('assets/jumpscareaudio.mp3')
    mySound.play()
});
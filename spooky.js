const blinky = document.getElementById("blinky");
const boo = document.getElementById("boo");
const inky = document.getElementById("inky");
const jumpscare = document.querySelector(".jumpscare");

// jumpscare when user clicks on boo word
boo.addEventListener("click", function () {

    jumpscare.classList.add("jumpscare-active-class");
    
    setTimeout(function () {
        jumpscare.classList.remove("jumpscare-active-class");
    }, 2000);
    
    let mySound = new Audio('assets/jumpscareaudio.mp3');
    mySound.play();
});


//Disappears selected variable
function vanish(vanish) {

    if (vanish.className != "hide") {
        vanish.className = "hide";
        return vanish;
    } else {
        vanish.className = "";
        return vanish;
    }
}

//Animate item left
function leftAnimate(item) {
    var advance;
    var position = 0;
    var retreat;
    var snap;

    function snapBack() {
        position += 2;
        item.style.left = position + "%";

        if (position >= 0) {
            clearInterval(snap);
            item.style.position = "";
            item.style.left = "";
            setTimeout(function() { leftAnimate(item) }, 25000);
        }    
    }
    function animateBackward() {
        position -= 1;
        item.style.left = position + "%";

        if (position < -45) {
            clearInterval(retreat);
            snap = setInterval(snapBack, 1);
        }
    }
    function animateForward() {
        position += 1;
        item.style.left = position + "%";

        if (position > 155) {
            clearInterval(advance);
            retreat = setInterval(animateBackward, 15);
        }
    }
    item.style.position = "absolute";
    advance = setInterval(animateForward, 20); //begin animation
}

//Animate item right
function rightAnimate(item) {
    var advance;
    var position = 0;
    var retreat;
    var snap;

    function snapBack() {
        position += 2;
        item.style.right = position + "%";

        if (position >= 0) {
            clearInterval(snap);
            item.style.position = "";
            item.style.right = "";
            setTimeout(function() { rightAnimate(item) }, 22000);
        }    
    }
    function animateBackward() {
        position -= 1;
        item.style.right = position + "%";

        if (position < -45) {
            clearInterval(retreat);
            snap = setInterval(snapBack, 1);
        }
    }
    function animateForward() {
        position += 1;
        item.style.right = position + "%";

        if (position > 155) {
            clearInterval(advance);
            retreat = setInterval(animateBackward, 15);
        }
    }
    item.style.position = "absolute";
    advance = setInterval(animateForward, 20); //begin animation
}


//runs function after html document loads
window.onload = function() {

    leftAnimate(inky);
    rightAnimate(blinky);
    
    setInterval(function(){ vanish(inky) }, 5500); //runs every 5.5 seconds
    setInterval(function(){ vanish(blinky) }, 8500); //runs every 8.5 seconds
};


const blinky = document.getElementById("blinky");
const body = document.querySelector(".body");
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


//Adds class triggering css animation to continue
function clockwise (item) {
    
    function end() {
        item.classList.remove("clockwise");
        setTimeout(function() { begin() }, 20000); //waits 20 secs to run
    }

    function begin() {
        item.classList.add("clockwise");
        setTimeout(function() { end() }, 10000); //waits 10 secs to run
    }
    
    begin();
}

//Adds class triggering css animation to continue
function counterClockwise (item) {
    
    function end() {
        item.classList.remove("counter-clockwise");
        setTimeout(function() { begin() }, 20000 ); //waits 20 secs to run
    }

    function begin() {
        item.classList.add("counter-clockwise");
        setTimeout(function() { end() } , 10000); //waits 10 secs to run
    }

    begin();
}


//cycle background color
function flash() {
    var colorArray = ["black","white"];
    var index = 0;
    var lighting;
    var thunder; 

    function reset () {
        if (index >= colorArray.length) {
            index = 0;
        }
    }

    function color () {
        body.style.backgroundColor = colorArray[index];
        index++;
        reset();
    }

    lighting = setInterval( function() { color() }, 100);
    thunder = new Audio('assets/lightning.mp3');
    thunder.play();

    setTimeout(function() { 
        clearInterval(lighting);
        body.style.backgroundColor = colorArray[0];
    }, 1500 );
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
            item.style.transform = "rotate(0deg)";           
            setTimeout(function() { leftAnimate(item) }, 20000);
        }    
    }
    function animateBackward() {
        position -= 1;
        item.style.left = position + "%";
        item.style.transform = "rotate(-10deg)";

        if (position < -45) {
            clearInterval(retreat);
            snap = setInterval(snapBack, 1);
        }
    }
    function animateForward() {
        position += 1;
        item.style.left = position + "%";
        item.style.transform = "rotate(10deg)";

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
            item.style.transform = "rotate(0deg)";
            setTimeout(function() { rightAnimate(item) }, 20000);
        }    
    }
    function animateBackward() {
        position -= 1;
        item.style.right = position + "%";
        item.style.transform = "rotate(10deg)";

        if (position < -45) {
            clearInterval(retreat);
            snap = setInterval(snapBack, 1);
        }
    }
    function animateForward() {
        position += 1;
        item.style.right = position + "%";
        item.style.transform = "rotate(-10deg)";

        if (position > 155) {
            clearInterval(advance);
            retreat = setInterval(animateBackward, 15);
        }
    }
    item.style.position = "absolute";
    advance = setInterval(animateForward, 20); //begin animation
}

//hides item by adding class
function vanish(item) {

    if (item.className != "hide") {
        item.className = "hide";
        return item;
    } else {
        item.className = "";
        return item;
    }
}


//runs function after html document loads
window.onload = function() {

    body.addEventListener("click", function() { flash(); } );

    setTimeout(function() { clockwise(inky) }, 20000);
    setTimeout(function() { counterClockwise(blinky) }, 12000 );

    setTimeout(function() { leftAnimate(inky) }, 10000 );
    setTimeout(function() { rightAnimate(blinky) }, 12000 );
    
    setInterval(function(){ vanish(inky) }, 5500); //runs every 5.5 seconds
    setInterval(function(){ vanish(blinky) }, 8500); //runs every 8.5 seconds
};

let welcomeTitle = document.getElementById("welcomeTitle");
let scrollDownLabel = document.getElementById("scrollDownLabel");
let progress = 0;

let FLASH_TIME = 4000; // miliseconds
let refreshTime = 33; // milliseconds

let finishedWelcomeAnimation = false;
let cursorShowingOnWelcomeTitle = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWrite(text, element) {
    let length = text.length;
    let currentText = "";
    for(let i = 0; i < length; ++i) {
        await sleep(Math.floor(Math.random() * 25 + 50));
        currentText += text.charAt(i);
        element.innerHTML = currentText;
    }
    console.log("Completed typewrite animation!");
    finishedWelcomeAnimation = true;
}

let f = function(time) {
    return -1 * Math.cos(Math.PI * 2 * time / FLASH_TIME ) + 1
}

function flashScrollDownLabel() {
    progress += refreshTime;

    if (progress >= FLASH_TIME) {
        progress = progress % FLASH_TIME;
    }

    scrollDownLabel.style.opacity = f(progress);
}

typeWrite("Welcome.", welcomeTitle);
setInterval(flashScrollDownLabel, refreshTime);
console.log("Loaded javascript file!");

// This is to take into account mobile's browser address bar inset

let resizeViewportheight = () => {
    if (window.innerHeight > 0) {
        let vh = window.innerHeight * 0.01;
        console.log(vh);
        document.getElementsByClassName(".welcome-section")[0].style.height = vh * 100;
    } else { console.log("INNNER HEIGHT IS 0!") }
}

resizeViewportheight()

window.addEventListener('resize', () => {
    resizeViewportheight()
})
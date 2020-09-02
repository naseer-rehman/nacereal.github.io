let welcomeTitle = document.getElementById("welcomeTitle");

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
}

typeWrite("Welcome!", welcomeTitle);
console.log("Loaded javascript file!");
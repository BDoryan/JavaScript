const canvas = document.getElementById('window_canvas');
const context = canvas.getContext('2d');

const SIZE = 100;
var winPoints = 0;
var losePoints = 0;

canRetry = true;

function updateStats() {
    document.getElementById("win_points").textContent = winPoints;
    document.getElementById("lose_points").textContent = losePoints;
    document.getElementById("ratios_points").textContent = winPoints / losePoints;
}

function hideAll() {
    document.getElementById("win_message").style.display = "none";
    document.getElementById("lose_message").style.display = "none";
    document.getElementById("retry_message").style.display = "none";
}

hideAll();

function show(target) {
    document.getElementById(target).style.display = "block";
}

function win() {
    winPoints++;
    hideAll();
    show("win_message")
}

function lose() {
    losePoints++;
    hideAll();
    show("lose_message")
}

function youCanRetry() {
    canRetry = true;
    hideAll();
    show("retry_message")
    document.getElementById("roll").disabled = true;
}

function randomDice(x, y) {
    let number = Math.floor(Math.random() * 5) + 1;
    const image = new Image();
    image.onload = () => {
        context.drawImage(image, x, y, SIZE, SIZE);
    }
    image.src = "./assets/img/" + number + ".png";
    return number;
}

function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height)
}

var dices = [];
function rollLast() {
    dices[2] = randomDice(20 + (2 * (20 + SIZE)), 0);
    check(true);
}


function finish() {
    canRetry = false;
    document.getElementById("roll").disabled = false;
    updateStats();
}

function check() {
    console.log(dices)
    if (!canRetry && dices[0] == 4 && dices[1] == 2 && dices[2] != 1) {
        youCanRetry();
        return
    } else if (dices[0] == 4 && dices[1] == 2 && dices[2] == 1)
        win()
    else
        lose();
    finish();
}

function roll() {
    dices = []
    //clear();
    for (let i = 0; i < 3; i++) {
        dices.push(randomDice(20 + (i * (20 + SIZE)), 0));
    }
    check(false);
}

canvas.onclick = (e) => {
    if(!canRetry)return;
    if(e.layerX >= 485){
        rollLast();
    }
}
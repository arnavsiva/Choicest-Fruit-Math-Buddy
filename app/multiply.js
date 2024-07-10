const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("wrong");

const currentScore = document.getElementById("current-score");
const timerDisplay = document.getElementById("timer");

let answer = 0;
let score = 0;
let timeLeft = 100;
let timer;

function generateEquation() {
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13);

    let dummyAnswer1;
    let dummyAnswer2;

    answer = num1 * num2;

    do {
        dummyAnswer1 = Math.floor(Math.random() * 169);
    } while (dummyAnswer1 === answer);

    do {
        dummyAnswer2 = Math.floor(Math.random() * 169);
    } while (dummyAnswer2 === answer || dummyAnswer2 === dummyAnswer1);

    let allAnswers = [answer, dummyAnswer1, dummyAnswer2];
    let switchAnswers = [];

    for (let i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
}

function updateScore() {
    currentScore.textContent = score;
}

function updateTimer() {
    timerDisplay.textContent = timeLeft;
}

function startGame() {
    score = 0;
    timeLeft = 60;
    generateEquation();
    updateScore();
    updateTimer();

    clearInterval(timer);
    timer = setInterval(function () {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(timer);
            window.scrollTo(0, 0);

            let finalScore = score;
            alert("Time is up! Your Final Score is: " + finalScore);

            //Reloading the page
            location.reload();
        }
    }, 1000)
}

function updateTime() {
    timeLeft--;
    document.getElementById("timer").innerHTML = timeLeft;
    if (timeLeft === 0) {
        alert("Time is up! Your final score is " + score + ".");
    }
}

option1.addEventListener("click", () => {
    if (parseInt(option1.innerHTML) === answer) {
        score++;
        generateEquation();
        updateScore();
    } else {
        audio.play();
    }
});

option2.addEventListener("click", () => {
    if (parseInt(option2.innerHTML) === answer) {
        score++;
        generateEquation();
        updateScore();
    } else {
        audio.play();
    }
});

option3.addEventListener("click", () => {
    if (parseInt(option3.innerHTML) === answer) {
        score++;
        generateEquation();
        updateScore();
    } else {
        audio.play();
    }
});

generateEquation();
startGame();
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("wrong");

let answer = 0;

function generateEquation() {
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13) + 1;

    let dummyAnswer1;
    let dummyAnswer2;

    answer = (num1 / num2).toFixed(1);

    do {
        dummyAnswer1 = (Math.random() * 13).toFixed(1);
    } while (dummyAnswer1 === answer);

    do {
        dummyAnswer2 = (Math.random() * 13).toFixed(1);
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

option1.addEventListener("click", function () {
    if (option1.innerHTML == answer) {
        generateEquation();
    } else {
        audio.play();
    }
});

option2.addEventListener("click", function () {
    if (option2.innerHTML == answer) {
        generateEquation();
    } else {
        audio.play();
    }
});

option3.addEventListener("click", function () {
    if (option3.innerHTML == answer) {
        generateEquation();
    } else {
        audio.play();
    }
});

generateEquation();
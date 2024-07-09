const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const audio = document.getElementById("wrong");

let answer = 0;

function generateEquation() {
    let num1 = Math.floor(Math.random() * 13);
    let num2 = Math.floor(Math.random() * 13);

    answer = num1 + num2;

    let dummyAnswer1, dummyAnswer2;
    do {
        dummyAnswer1 = Math.floor(Math.random() * 26);
    } while (dummyAnswer1 === answer);

    do {
        dummyAnswer2 = Math.floor(Math.random() * 26);
    } while (dummyAnswer2 === answer || dummyAnswer2 === dummyAnswer1);

    let allAnswers = [answer, dummyAnswer1, dummyAnswer2];
    let switchAnswers = [];

    while (allAnswers.length) {
        let randomIndex = Math.floor(Math.random() * allAnswers.length);
        switchAnswers.push(allAnswers.splice(randomIndex, 1)[0]);
    }

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;
}

option1.addEventListener("click", () => {
    if (parseInt(option1.innerHTML) === answer) {
        generateEquation();
    } else {
        audio.play();
    }
});

option2.addEventListener("click", () => {
    if (parseInt(option2.innerHTML) === answer) {
        generateEquation();
    } else {
        audio.play();
    }
});

option3.addEventListener("click", () => {
    if (parseInt(option3.innerHTML) === answer) {
        generateEquation();
    } else {
        audio.play();
    }
});

generateEquation();

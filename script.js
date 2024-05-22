let correctAnswer;
let streak = 0;

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;

    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;

    const answers = [correctAnswer];
    while (answers.length < 4) {
        const wrongAnswer = Math.floor(Math.random() * 100) + 1;
        if (!answers.includes(wrongAnswer)) {
            answers.push(wrongAnswer);
        }
    }

    answers.sort(() => Math.random() - 0.5);

    document.getElementById('box1').textContent = answers[0];
    document.getElementById('box2').textContent = answers[1];
    document.getElementById('box3').textContent = answers[2];
    document.getElementById('box4').textContent = answers[3];

    resetBoxColors();
}

function checkAnswer(boxNumber) {
    const selectedBox = document.getElementById(`box${boxNumber}`);
    const selectedAnswer = parseInt(selectedBox.textContent);
    if (selectedAnswer === correctAnswer) {
        streak++;
        document.getElementById('streakCount').textContent = streak;
        selectedBox.classList.add('correct');
        setTimeout(generateQuestion, 1000);
    } else {
        streak = 0;
        document.getElementById('streakCount').textContent = streak;
        selectedBox.classList.add('wrong');
    }
}

function resetBoxColors() {
    document.getElementById('box1').classList.remove('correct', 'wrong');
    document.getElementById('box2').classList.remove('correct', 'wrong');
    document.getElementById('box3').classList.remove('correct', 'wrong');
    document.getElementById('box4').classList.remove('correct', 'wrong');
}

window.onload = generateQuestion;

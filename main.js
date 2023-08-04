const scoreValueElement = document.querySelector('#scoreValue');
const correctPillElement = document.querySelector('#correct');
const wrongPillElement = document.querySelector('#wrong');
const questionHolder = document.querySelector('#question');
const startResetButton = document.querySelector('#startreset');
const timeremainingElement = document.querySelector('#timeremaining');
const timeremainingValueElement = document.querySelector('#timeremainingValue');
const gameOverElement = document.querySelector('#gameover');
const optionsElement = document.querySelectorAll('.options');

// state variable or helper Variables
let playing = false;
let score;
let timeRemaining;
let countdown;
let correctAns;
let correctAnsPosition;

loadEvents();

function loadEvents() {
  startResetButton.addEventListener('click', handleStartReset);

  optionsElement.forEach(function (optionsElement) {
    optionsElement.addEventListener('click', handleOptionClick);
  });
}

function handleStartReset(e) {
  if (playing) {
    // user pressed reset button
    window.location.reload();
  } else {
    playing = true;

    // this is useful when the user start the game again
    hide(gameOverElement);
    setText(startResetButton, 'Reset Game');

    score = 0;
    setText(scoreValueElement, score);

    show(timeremainingElement);
    timeRemaining = 60;
    setText(timeremainingValueElement, timeRemaining);

    generateQA();

    startCountDown();
  }
}

function handleOptionClick(e) {
  const clickedOptionPosition = parseInt(this.getAttribute('data-position'));

  if (clickedOptionPosition === correctAnsPosition) {
    score++;
    setText(scoreValueElement, score);

    showCorrectPillElement();

    generateQA();
  } else {
    showWrongPillElement();
  }
}

function generateQA() {
  let num1 = generateRandomNumber(10);
  let num2 = generateRandomNumber(10);
  correctAns = num1 * num2;

  setText(questionHolder, `${num1} x ${num2}`);

  correctAnsPosition = generateRandomNumber(4);

  const correctBoxId = `#box${correctAnsPosition}`;
  const correctBoxElement = document.querySelector(correctBoxId);
  setText(correctBoxElement, correctAns);

  let options = [correctAns];
  // Generate 3 random option
  for (let i = 1; i <= 4; i++) {
    let wrongAnswer;
    if (i !== correctAnsPosition) {
      do {
        const randomFirstNum = generateRandomNumber(10);
        const randomSecondNum = generateRandomNumber(10);
        wrongAnswer = randomFirstNum * randomSecondNum;
      } while (options.indexOf(wrongAnswer) !== -1);

      options.push(wrongAnswer);

      const wrongBoxId = `#box${i}`;
      const wrongBoxElement = document.querySelector(wrongBoxId);
      setText(wrongBoxElement, wrongAnswer);
    }
  }
}

// Helper Method

function startCountDown() {
  countdown = setInterval(function () {
    timeRemaining--;
    if (timeRemaining <= 0) {
      stopCountDown();
      playing = false;

      show(gameOverElement);

      const message = `<p>Game Over</p><p>Your Score ${score}</p>`;
      setText(gameOverElement, message);

      setText(startResetButton, 'Start Game');

      hide(timeremainingElement);
    }
    setText(timeremainingValueElement, timeRemaining);
  }, 1000);
}

function setText(element, text) {
  element.innerHTML = text;
}

function show(element) {
  element.style.display = 'block';
}

function hide(element) {
  element.style.display = 'none';
}

function stopCountDown() {
  clearInterval(countdown);
}

function generateRandomNumber(till = 10) {
  return 1 + Math.round(Math.random() * (till - 1));
}

function showCorrectPillElement() {
  hide(wrongPillElement);
  show(correctPillElement);
  setTimeout(function () {
    hide(correctPillElement);
  }, 500);
}

function showWrongPillElement() {
  hide(correctPillElement);
  show(wrongPillElement);
  setTimeout(function () {
    hide(wrongPillElement);
  }, 500);
}

const optionsElement = document.querySelectorAll('.options');
// console.log(optionsElement);
// const abc = document.querySelector('.box-text');
let turn = 'X';
loadEvents();

let player1Positions = [];
let player2Positions = [];

function loadEvents() {
  optionsElement.forEach(function (optionsElement) {
    optionsElement.addEventListener('click', handleOptionClick);
  });
}

function handleOptionClick(e) {
  // let a = e.target.innerHTML;
  // if(e.target.innerHTML.charCodeAt(0) === 10)
  //   console.log("Hello");
  const clickedOptionPosition = parseInt(this.getAttribute('data-position'));
  // console.log(clickedOptionPosition);
  const clickedOptionText = this.querySelector('.box-text');
  if (e.target.innerHTML.charCodeAt(0) === 10) {
    e.target.innerHTML = turn;
    // console.log(clickedOptionText);
    checkWin(clickedOptionPosition, e.target);
    turn = changeTurn();
  }
}

const changeTurn = function () {
  return turn === 'X' ? 'O' : 'X';
  // if (turn === 'X') {
  //   turn === 'O';
  //   player1Positions.push();
  // } else {
  //   turn = 'X';
  // }
};

// win logic
// const win = function checkWin() {
//   let boxtext = document.querySelector('.box-text');
//   let wins = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [1, 4, 7],
//     [2, 5, 8],
//     [3, 6, 9],
//     [1, 5, 9],
//     [3, 5, 7],
//   ];
// };
let board = ['', '', '', '', '', '', '', '', ''];
let wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function checkWin(position, currentText) {
  // console.log(position);
  // console.log(currentText.innerHTML);
  if (currentText === 'X') {
    console.log('X click');
  } else {
    console.log('Y click');
  }
}

// function checkWin(position, currentText) {
//   console.log(position);
//   console.log(currentText);
//   let roundWon = false;

//   for (let i = 0; i <= 7; i++) {
//     const winCondition = wins[i];
//     // console.log(winCondition);
//     const a = board[winCondition[0]];
//     // console.log(a);
//     const b = board[winCondition[1]];
//     // console.log(b);
//     const c = board[winCondition[2]];
//     // console.log(c);
//     if (a === '' || b === '' || c === '') {
//       continue;
//     }
//     if (a === b && b === c) {
//       roundWon = true;
//       break;
//     }

//     if (roundWon) {
//       if (currentText === 'x') {
//         console.log('X won');
//       } else {
//         console.log('O won');
//       }
//     }
//   }

//   const updateBoard = function updateBoard1(index) {
//     board[index] = currentText;
//   };
// }

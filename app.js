const boardArr = [
  0,1,2,
  3,4,5,
  6,7,8
];

let turnCount = 0;
const player1 = 'X';
const player2 = 'O';

function turnCounter() {
  turnCount++;
  if (turnCount == 10) {
    console.log('game over man!');
  } else {
    if(turnCount % 2 == 0) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
  }
}

function checkWinner() {
  if (boardArr[0] === boardArr[1] & boardArr[0] === boardArr[2]) {
    console.log('winner');
  }
}

function boxClick(e) {
  const clickedBox = e.target;
  clickedBox.append(currentPlayer);
  boardArr[clickedBox.id] = currentPlayer;
  console.log(boardArr);
  if (turnCount >= 3) {
    checkWinner();
  }
  turnCounter();
}

$(document).ready(function(){
  turnCounter();
  console.log(turnCount);
  $('.box').click(boxClick);
});

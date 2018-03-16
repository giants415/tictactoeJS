const boardArr = [
  0,0,0,
  0,0,0,
  0,0,0
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
  console.log(boardArr);
}

function boxClick(e) {
  const clickedBox = e.target;
  clickedBox.append(currentPlayer);
  boardArr[clickedBox.id] = currentPlayer;
  console.log(boardArr);
  checkWinner();
  turnCounter();
}

$(document).ready(function(){
  turnCounter();
  $('.box').click(boxClick);
});

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
    $('h2').text(currentPlayer + ' has won the game!');
  } else if (boardArr[3] === boardArr[4] & boardArr[3] === boardArr[5]){
    $('h2').text(currentPlayer + ' has won the game!');
  } else if (boardArr[6] === boardArr[7] & boardArr[6] === boardArr[8]){
    $('h2').text(currentPlayer + ' has won the game!');
  } else if (boardArr[0] === boardArr[3] & boardArr[0] === boardArr[6]){
    $('h2').text(currentPlayer + ' has won the game!');
  } else if (boardArr[1] === boardArr[4] & boardArr[1] === boardArr[7]){
    $('h2').text(currentPlayer + ' has won the game!');
  } else if (boardArr[2] === boardArr[5] & boardArr[2] === boardArr[8]){
    $('h2').text(currentPlayer + ' has won the game!');
  } else if (boardArr[0] === boardArr[4] & boardArr[0] === boardArr[8]){
    $('h2').text(currentPlayer + ' has won the game!');
  } else if (boardArr[2] === boardArr[5] & boardArr[2] === boardArr[8]){
    $('h2').text(currentPlayer + ' has won the game!');
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

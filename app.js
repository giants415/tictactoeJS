const boardArr = [
  0,0,0,
  0,0,0,
  0,0,0
];

const turnCount = 0;

const player1 = 'X';
const player2 = 'O';

function turnCounter() {
  turnCount++;
  if(turnCount % 2 == 0) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

function boxClick(e) {
  const clickedBox = e.target;
  clickedBox.append('O');
}
2
$(document).ready(function(){
  $('.box').click(boxClick);
});

const boardArr = [
  0,0,0,
  0,0,0,
  0,0,0
];

const turnCount = 0;

function turnCounter() {
  turnCount++;
  if(turnCount % 2 == 0) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

function boxClick(e) {
  console.log(e.target.id);
}

$(document).ready(function(){
  $('.box').click(boxClick);
});

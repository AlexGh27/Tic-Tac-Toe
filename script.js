const createPlayer = (name, symbol) => {
  return {name, symbol}
}

const gameContainer = () => {
  let board = ["", "", "", "", "", "", "", "", ""];
  return {board};
}

const gameBoard = gameContainer();


const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5], 
  [6, 7, 8],
  [0, 3, 6], 
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


let counter = 0;



let square = document.querySelectorAll(".square");
square.forEach(square => {
  square.addEventListener("click", function(e) {
    let boardString = square.id.substring(1);
    let boardIndex = Number(boardString);
    gameBoard.board[boardIndex] = symbolChooser();
    console.log(gameBoard.board);
    counter++;
    checkWinner();
  }, {once: true})
})


function symbolChooser() {
  if (counter % 2 === 0) {
    return "X";
  }
  else {
    return "0";
  }
}

function checkWinner() {
  for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
    const combination = WINNING_COMBINATIONS[i];
    const firstCell = gameBoard.board[combination[0]];
    const secondCell = gameBoard.board[combination[1]];
    const thirdCell = gameBoard.board[combination[2]];

    if (firstCell == "" || secondCell == "" || thirdCell == "") {
      continue;
    }
    else if (firstCell == secondCell && secondCell == thirdCell) {
      break;
    }
  }
}







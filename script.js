

const gameContainer = () => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let counter = 1;
  let symbol = "xSymbol";
  return {board, counter, symbol};
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

const newRound = document.querySelector(".newRound");
newRound.addEventListener("click", function(e) {
  let square = document.querySelectorAll(".square");
  square.forEach(square => {
  square.addEventListener("click", function(e) {
  
    let boardString = square.id.substring(1);
    let boardIndex = Number(boardString);
    gameBoard.board[boardIndex] = symbolChooser();
    console.log(gameBoard.counter);
    drawSymbol();
    checkWinner();
    console.log(gameBoard.board);
    swapTurns();
  }, {once: true})
})
})



function symbolChooser() {
  if (gameBoard.symbol == "xSymbol") {
    return "X";
    
  }
  else {
    return "O";
    
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
      
      if(firstCell === "X" && secondCell === "X" && thirdCell === "X") {
        console.log("Player 1 wins!")
      }
      else if(firstCell === "O" && secondCell === "O" && thirdCell === "O"){
        console.log("Player 2 wins!")
      }
      break;
    }
  }
}

function drawSymbol() {
  let cell = document.querySelectorAll(".square");
  cell.forEach(cell => {
    cell.addEventListener("click", function(e) {
      cell.className = gameBoard.symbol;
    }, {once: true})
    
  })
}

function swapTurns() {
  if (gameBoard.symbol == "xSymbol") {
    gameBoard.symbol = "oSymbol";
  }
  else {
    gameBoard.symbol = "xSymbol";
  }
}





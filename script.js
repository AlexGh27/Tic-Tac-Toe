

const gameContainer = () => {
  let board = ["", "", "", "", "", "", "", "", ""];
  let symbol = "xSymbol";
  const boardContainer = document.querySelector(".boardContainer");
  const children = document.querySelectorAll(".boardContainer > div");
  return {board, symbol, boardContainer, children};
}

const player = () => {
  let score = 0;
  return {score};
}

const player1 = player;
player1.score = 0;
const player2 = player;
player2.score = 0;
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
];

let square = document.querySelectorAll(".square");
  square.forEach(square => {
  square.addEventListener("click", function(e) {
    let boardString = square.id.substring(1);
    let boardIndex = Number(boardString);
    gameBoard.board[boardIndex] = symbolChooser();
    console.log(gameBoard.board);
    square.className = gameBoard.symbol;
    let symbolImage = addSymbolImage();
    square.appendChild(symbolImage);
    checkWinner();
    swapTurns();
  }, {once: true})
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
  document.getElementById("player1Score").innerHTML = player1.score;
  document.getElementById("player2Score").innerHTML = player2.score;
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
        player1.score++;
        document.getElementById("player1Score").innerHTML = player1.score;
        gameBoard.boardContainer.style = "pointer-events: none;";
        break;
      }

      else if(firstCell === "O" && secondCell === "O" && thirdCell === "O"){
        console.log("Player 2 wins!")
        player2.score++;
        document.getElementById("player2Score").innerHTML = player2.score;
        gameBoard.boardContainer.style = "pointer-events: none;";
        break;
      } 
      
    }
  }
}



function swapTurns() {
  if (gameBoard.symbol == "xSymbol") {
    gameBoard.symbol = "oSymbol";
  }
  else {
    gameBoard.symbol = "xSymbol";
  }
}

function addSymbolImage() {
  if (gameBoard.symbol == "xSymbol") {
    let symbolImage = document.createElement("img");
    symbolImage.src = "X.png";
    symbolImage.className = "symbolImage";
    return symbolImage;
  }
  else {
    let symbolImage = document.createElement("img");
    symbolImage.src = "O.png";
    symbolImage.className = "symbolImage";
    return symbolImage;
  }
  
}



let reset = document.querySelector(".resetScore");
reset.addEventListener("click", resetScore);


function resetScore() {
  player1.score = 0;
  player2.score = 0;
  document.getElementById("player1Score").innerHTML = player1.score;
  document.getElementById("player2Score").innerHTML = player2.score;
}

let round = document.querySelector(".newRound");
round.addEventListener("click", newRound);

function newRound() {
  gameBoard.children.classList = "square";
}

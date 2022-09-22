
const gameBoard = (() => {
  let board = [];
  return {board};
})();

document.querySelectorAll('.square').forEach(square => {
  square.addEventListener('click', function(e) {
    gameBoard.board.push("X");
    console.log(gameBoard.board);
  })
})
  





const displayController = (() => {

})

const createPlayer = (name, symbol) => {

  return {name, symbol}
}

const alex = createPlayer("Alex", "X");
const ghioca = createPlayer("Ghioca", "O");


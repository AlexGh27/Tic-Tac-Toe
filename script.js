let S11 = document.querySelector("#S11");
let S12 = document.querySelector("#S12");
let S13 = document.querySelector("#S13");
let S21 = document.querySelector("#S21");
let S22 = document.querySelector("#S22");
let S23 = document.querySelector("#S23");
let S31 = document.querySelector("#S31");
let S32 = document.querySelector("#S32");
let S33 = document.querySelector("#S33");

const gameBoard = (() => {
    let board = [S11, S12, S13, S21, S22, S23, S31, S32, S33]
    return {board};
})();


 let square = document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', function(e) {
      square.style.background = "red";
    })
  })

  const Player = (name) => {
    let turn = 0;
    let choose = square => {
        square.innerHTML = "X";
    };
    return {turn, choose, turn};
  };

  const alex = Player("alex");
  alex.choose();
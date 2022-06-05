// 1) Define the required variables used to track the state of the game
let board;
let turn;
let winner;

// 2) Store cached element references


const squareEls = document.querySelectorAll(".square");
const messageEl = document.querySelector("#message");
const restBtn = document.querySelector("#rest-button")
const gameBoard = document.querySelector(".board")
// 3) Upon loading, the game state should be initialized, and a function should be called to render this game state

function init() {
    board = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    turn = 1;
    winner = null;
    render();
}

// 4) The state of the game should be rendered to the user
function render() {
    board.forEach(function (square, index) {
        if (square === 1) {
            squareEls[index].textContent = "o";
        } else if (square === -1) {
            squareEls[index].textContent = "x";
        } else {
            squareEls[index].textContent = " ";
        }
    });
    
    // message if there is a winner
    if (winner === null) {
        messageEl.textContent = `it is ${turn === 1 ? "O's" : "X's"} turn!`  // ${javscript } template literal

    } else if (winner === 0) {
        messageEl.textContent = `it is a tie`
    } else {
        messageEl.textContent = `the winner is ${winner === -1 ?"x" : "o"}`
    }
}

// 5) Define the required constants

const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

// 7) Build the `getWinner`
// function

function getWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        let winningNumber = board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]

        if (winningNumber === 3) {
            return 1
        } else if (winningNumber === -3) {
            return -1
        }
    }
    if (!board.includes(null)) {
        return 0
    } else {
        return null
    }
}

// 6) Handle a player clicking a square with a `handleClick`
// function

function handleClick(event) {
    // console.log('test')
    let splitArray = event.target.id.split('')
    let sqIdx = Number(splitArray[2])
    if (isNaN(sqIdx)) {      //isNaN to stop function
        return
    } else if (winner) {
        return
    } else {
        board[sqIdx] = turn
        turn *= -1
        winner = getWinner()
        render()
    }

}
gameBoard.addEventListener('click', handleClick)

// 8) Create Reset functionality
restBtn.addEventListener('click',init)


init()
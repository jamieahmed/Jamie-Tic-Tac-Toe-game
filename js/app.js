// 1) Define the required variables used to track the state of the game
let board;
let turn;
let winner;
// 2) Store cached element references

const restBtn = document.querySelector("#rest-button")

const squareEls = document.querySelectorAll(".square");
const messageEl = document.querySelector("#message");
// 3) Upon loading, the game state should be initialized, and a function should be called to render this game state

function init() {
    board = [
        "null",
        "null",
        "null",
        "null",
        "null",
        "null",
        "null",
        "null",
        "null",
    ];
    turn = 1;
    winner = null;
    render();
}

// 4) The state of the game should be rendered to the user
function render() {
    board.forEach(function(squareEls, nam) {
        if (squareEls === -1) {
            squareEls[nam].textContent = "o";
        } else if (squareEls === 1) {
            squareEls[nam].textContent = "x";
        } else {
            squareEls[nam].textContent = "null";
        }
    });
}
// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick`
// function

// 7) Build the `getWinner`
// function

// 8) Create Reset functionality
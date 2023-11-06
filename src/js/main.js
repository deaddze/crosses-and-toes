import { hint } from "./hints.js";
import { getWinner } from "./puzzle.js";
const board = document.getElementById('board');
const message = document.getElementById('message');
const btn = document.getElementById('btn');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const createTable = () => {
  board.innerHTML = '';
  gameBoard.forEach((cell, i) => {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.textContent = cell;
    div.addEventListener('click', () => getCurrentPlayer(i))
    board.appendChild(div);
  })
}

// const getWinner = () => {
//     const patterns = [
//       [0, 1, 2], [3, 4, 5], [6, 7, 8],
//       [0, 3, 6], [1, 4, 7], [2, 5, 8],
//       [0, 4, 8], [2, 4, 6]
//     ]
//     for(let pattern of patterns){
//       let [a, b, c] = pattern;
//       if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
//         return gameBoard[a]
//       }
//     }
//     return gameBoard.includes('') ? null : 'ничья';
// }

const getCurrentPlayer = (i) => {
  if(gameActive && gameBoard[i] === ''){
    gameBoard[i] = currentPlayer;
    createTable();
    const winner = getWinner(gameBoard);
    if(winner){
      gameActive = false;
      hint(winner)
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

const startGame = () => {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  message.textContent = '';
  createTable();
}

btn.addEventListener('click', startGame)
startGame()
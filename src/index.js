import './style.css';
import {shipFunc} from './ships.js';
import {players} from './player.js';
import {gameBoardCreation} from './gameboard.js';

const shipFactor = shipFunc();
gameBoardCreation();
players();

const gameBoardArray = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
    ];

function placeShipsonBoard(board, row, col, direction, count){
        if (direction === 'horizontal') {
            for (let i = col; i < col + count; i++) {
                if (i < 10) {
                board[row][i] = 1;
                }
        }
        } else if (direction === 'vertical') {
            for (let i = row; i < row + count; i++) {
            if (i < 10) {
            board[i][col] = 1;
                }
            }
        }
    };
    
    // Example usage:
    placeShipsonBoard(gameBoardArray, 2-1, 3, 'horizontal', 4);
    console.log(gameBoardArray);

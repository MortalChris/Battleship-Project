import './style.css';
import {shipFunc} from './ships.js';
import {players} from './player.js';
import {gameBoardCreation} from './gameboard.js';

// const ships = shipFunc();
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


const switchButton = document.getElementById("VH-Switch");
function switchVertOrHori(){
    switchButton.addEventListener('click', () => { 
        if(switchButton.textContent == "Horizontal"){
            switchButton.textContent = "Vertical";
        }else if(switchButton.textContent == "Vertical"){
                switchButton.textContent = "Horizontal";
        }
    })
}
switchVertOrHori();
// function selectShip(){

// };


function selectShip(){
    const playersObj = players();
    const player1 = playersObj.player1;
    let selectedShip;
    // const Carrier = document.getElementById("Carrier");
    // const Battleship = document.getElementById("Battleship");
    // const Cruiser = document.getElementById("Cruiser");
    // const Submarine = document.getElementById("Submarine");
    // const Destroyer = document.getElementById("Destroyer");
    const shipList = document.querySelectorAll('.Ship-List');
    shipList.forEach(ship => { // Add a click event listener to each button
        ship.addEventListener('click', () => {
            // Display the ID of the clicked button
            console.log(ship.id);
            selectedShip = ship.id;
        });
    }); 


    const currentShip = document.querySelectorAll(".player1-board-piece");
        currentShip.forEach((piece) => {
            piece.addEventListener('click', () => {
                const pieceColum = piece.dataset.column;
                const pieceRow = piece.dataset.row;
                placeShipsonBoard(gameBoardArray, pieceRow, pieceColum-1, switchButton.textContent, player1[selectedShip].length);
        });
    });
}
selectShip();


function placeShipsonBoard(board, row, col, direction, count){
        if (direction === 'Horizontal') {
            for (let i = col; i < col + count; i++) {
                if (i < 10) {
                board[row][i] = 1;
                }
        }
        } else if (direction === 'Vertical') {
            for (let i = row; i < row + count; i++) {
            if (i < 10) {
                board[i][col] = 1;
                }
            }
        }
        console.log(gameBoardArray);
    };


function displayShips(row, column){
    // boardPiece1.dataset.row
    // boardPiece1.dataset.column
}
    // Example usage:
    // placeShipsonBoard(gameBoardArray, 2-1, 3, 'horizontal', 4);
    

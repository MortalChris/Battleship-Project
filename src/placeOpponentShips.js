import {players} from './player.js';
import {shipFunc} from './ships.js';
const ships = shipFunc();

function placeOpponentShips(){

    const gameBoardArrayOpponent = [
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
        let randomShip;
    function randomizeShips(ships){
        
        let directionArray = ["Horizontal", "Vertical"];

        const playersObj = players();
        const player2 = playersObj.player2;

        for(let i = 0; i < 5; i++){
            const randomRow = Math.floor(Math.random() * 9);
            const randomColumn = Math.floor(Math.random() * 10) + 1;
            const randomizeDireactionFormula = Math.floor((Math.random() * directionArray.length));
            const randomDirection = directionArray[randomizeDireactionFormula];
            randomShip = Object.keys(ships)[i];
            placeShipsonBoard(gameBoardArrayOpponent, randomRow, randomColumn, randomDirection, player2[randomShip].length, randomShip);
        }
    };
    randomizeShips(ships);
    

    function placeShipsonBoard(board, row, col, direction, count, shipName){
        let allowShip = true;
            if (direction === 'Horizontal') {
                let difCol = col-1;
                for (let i = difCol; i < difCol + count; i++) {
                    if (i >= 10 || board[row][i] === 1 || board[row][i] === null ) {// 
                        allowShip = false;
                        break;
                        
                        }else{
                        allowShip = true;
                        }
                    }
                if(allowShip){
                    for (let i = difCol; i < difCol + count; i++) {
                        board[row][i] = 1;
                        let newCol = i + 1
                        // console.log("Column is " + col +" and row is " + row);
                        document.addEventListener('DOMContentLoaded', function() {
                            // Your JavaScript code here
                            addShipNameToBoard(row,newCol,shipName);
                        });
                    
                    }
                }else{
                    let newBoard = board;
                    let newRow = Math.floor(Math.random() * 9);
                    let newColumn = Math.floor(Math.random() * 10) + 1;
                    let newDirection = direction;
                    let newCount = count;
                    let newShipName = shipName;
                    placeShipsonBoard(newBoard, newRow, newColumn, newDirection, newCount, newShipName);
                }
    
            } else if (direction === 'Vertical') {
                for (let i = row; i < row + count; i++) {
                    if (i >= 10 || board[i][col] === 1 || board[i][col] === null ) {// 
                        allowShip = false;
                        break;
                        }else{
                        allowShip = true;
                        }
                    }
                if(allowShip) {
                    for (let i = row; i < row + count; i++) {
                        board[i][col] = 1;
                        // console.log("Col is " + col +" and row is " + i);
                        document.addEventListener('DOMContentLoaded', function() {//waits untill dom is fully loaded
                            addShipNameToBoard(i,col,shipName);
                        });
                        
                    }
                }else{
                    let newBoard = board;
                    let newRow = Math.floor(Math.random() * 9);
                    let newColumn = Math.floor(Math.random() * 10) + 1;
                    let newDirection = direction;
                    let newCount = count;
                    let newShipName = shipName;
                    placeShipsonBoard(newBoard, newRow, newColumn, newDirection, newCount, newShipName);
                }
            }
            console.log(gameBoardArrayOpponent);
        };


        function addShipNameToBoard(row, column, shipName){
            const displayBoardPiece = document.querySelector(`.player2-board-piece[data-row="${row}"][data-column="${column}"]`);
            console.log(displayBoardPiece);
            
            if (displayBoardPiece) {
                displayBoardPiece.dataset.ship = shipName;
                console.log(displayBoardPiece.dataset.ship);
                displayBoardPiece.style.backgroundColor = "red";
            } else {
                console.log(`Element not found for row ${row} and column ${column}`);
            }
            // displayBoardPiece.style.backgroundColor  = "red";
        }
        return gameBoardArrayOpponent;
}

export {placeOpponentShips};
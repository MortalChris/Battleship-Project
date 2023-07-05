import {players} from './player.js';
// import {gameBoardCreation} from './gameboard.js';
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
        
    function randomizeShips(ships){
        let randomShip;
        let directionArray = ["Horizontal", "Vertical"];

        const playersObj = players();
        const player2 = playersObj.player2;

        for(let i = 0; i < 5; i++){
            const randomRow = Math.floor(Math.random() * 9);
            const randomColumn = Math.floor(Math.random() * 10) + 1;
            const randomizeDireactionFormula = Math.floor((Math.random() * directionArray.length));
            const randomDirection = directionArray[randomizeDireactionFormula];
            randomShip = Object.keys(ships)[i];
            placeShipsonBoard(gameBoardArrayOpponent, randomRow, randomColumn, randomDirection, player2[randomShip].length);
        }
    };
    randomizeShips(ships);
    

    function placeShipsonBoard(board, row, col, direction, count){
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
                        // displayShips(row,newCol);
                    }
                }else{
                    let newBoard = board;
                    let newRow = Math.floor(Math.random() * 9);
                    let newColumn = Math.floor(Math.random() * 10) + 1;
                    let newDirection = direction;
                    let newCount = count;
                    placeShipsonBoard(newBoard, newRow, newColumn, newDirection, newCount);
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
                        console.log("Col is " + col);
                        // displayShips(i,col);
                    }
                }else{
                    let newBoard = board;
                    let newRow = Math.floor(Math.random() * 9);
                    let newColumn = Math.floor(Math.random() * 10) + 1;
                    let newDirection = direction;
                    let newCount = count;
                    placeShipsonBoard(newBoard, newRow, newColumn, newDirection, newCount);
                }
            }
            console.log(gameBoardArrayOpponent);
        };


        // function displayShips(row, column){
        //     const displayBoardPiece = document.querySelector(`.player2-board-piece[data-row="${row}"][data-column="${column}"]`);
        //     console.log(displayBoardPiece);
        //     displayBoardPiece.style.backgroundColor  = "red";
        // }
}

export {placeOpponentShips};
import {players} from './player.js';
import {gameBoardCreation} from './gameboard.js';

function placeShips(){

    players();
    gameBoardCreation();

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
    
    let selectedShip;
    function selectShip(){
        const playersObj = players();
        const player1 = playersObj.player1;
        
    
        const shipList = document.querySelectorAll('.Ship-List');
        shipList.forEach(ship => { // Add a click event listener to each button
            ship.addEventListener('click', () => {
                console.log(ship.id);
                selectedShip = ship.id;
            });
        }); 
    
        const currentShip = document.querySelectorAll(".player1-board-piece");
            currentShip.forEach((piece) => {
                piece.addEventListener('click', () => {
                    const pieceColum = piece.dataset.column;
                    const pieceRow = piece.dataset.row;
                    placeShipsonBoard(gameBoardArray, pieceRow-0, pieceColum, switchButton.textContent, player1[selectedShip].length);//pieceRow-0 to convert string into number
            });
        });
        return selectedShip;
    }
    selectShip();
    
    
    function disableShipSelect(){//Disables the ability to click on the type of ships to place
        switch(selectedShip){
            case "carrier":
                document.querySelector('#carrier').id = "carrier-Selected";
                // document.querySelector('#carrier') need to either delete it or make it grayed out
                selectedShip = " ";
                break;
            case "battleship":
                document.querySelector('#battleship').id = "battleship-Selected";
                // document.querySelector('#battleship') need to either delete it or make it grayed out
                selectedShip = " ";
                break;
            case "cruiser":
                document.querySelector('#cruiser').id = "cruiser-Selected";
                // document.querySelector('#cruiser') need to either delete it or make it grayed out
                selectedShip = " ";
                break;
            case "submarine":
                document.querySelector('#submarine').id = "submarine-Selected";
                // document.querySelector('#submarine') need to either delete it or make it grayed out
                selectedShip = " ";
                break;
            case "destroyer":
                document.querySelector('#destroyer').id = "destroyer-Selected";
                // document.querySelector('#destroyer') need to either delete it or make it grayed out
                selectedShip = " ";
                    break;
            default:
                console.log("Nothing/Or the ship already was selected");
        }
    };
    
    
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
                        displayShips(row,newCol);
                    }
                }else{
                    console.log("You tried to place the ship horizontally but there is already a ship there");
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
                        displayShips(i,col);
                    }
                }else{
                    console.log("You tried to place the ship vertically but there is already a ship there");
                }
            }
            console.log(gameBoardArray);
        };
    
    
    function displayShips(row, column){
        const displayBoardPiece = document.querySelector(`.player1-board-piece[data-row="${row}"][data-column="${column}"]`);
        console.log(displayBoardPiece);
        displayBoardPiece.style.backgroundColor  = "red";
    
        disableShipSelect();
    }
    
        // Example usage:
        // placeShipsonBoard(gameBoardArray, 2-1, 3, 'horizontal', 4);
        
    

}

export {placeShips}
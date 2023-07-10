import {players} from './player.js';
// import {gameBoardCreation} from './gameboard.js';

function placeShips(){

    // players();
    // gameBoardCreation();

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
    
    
    let selectedShip;
    function selectShip(){
        const playersObj = players();
        const player1 = playersObj.player1;
        
    
        const shipList = document.querySelectorAll('.Ship-List');
        shipList.forEach(ship => { // Add a click event listener to each button
            ship.addEventListener('click', () => {
                // console.log(ship.id);
                selectedShip = ship.id;
            });
        }); 
        const currentShip = document.querySelectorAll(".player1-board-piece");
            currentShip.forEach((piece) => {
                piece.addEventListener('click', () => {
                    const pieceColumn = piece.dataset.column;
                    const pieceRow = piece.dataset.row;
                    placeShipsonBoard(gameBoardArray, pieceRow-0, pieceColumn, switchButton.textContent, player1[selectedShip].length);//pieceRow-0 to convert string into number
            })
                piece.addEventListener('mouseover', () => {
                    const pieceColumn = piece.dataset.column;
                    const pieceRow = piece.dataset.row;
                    highlightShipOnBoard(gameBoardArray, pieceRow-0, pieceColumn, switchButton.textContent, player1[selectedShip].length);
                })
                piece.addEventListener('mouseout', () => {

                    removeHighlightOnBoard();
                });
        });
        return selectedShip;
    }
    selectShip();
    
    
    let number = document.querySelector("title");
    let currentShipsOnBoard = 0;


    function disableShipSelect(){//Disables the ability to click on the type of ships to place
        switch(selectedShip){
            case "carrier":
                document.querySelector('#carrier').id = "carrier-Selected";
                document.querySelector('#carrier-Selected').style.color = "gray";
                selectedShip = " ";

                currentShipsOnBoard += 1;
                number.id = currentShipsOnBoard;
                break;
            case "battleship":
                document.querySelector('#battleship').id = "battleship-Selected";
                document.querySelector('#battleship-Selected').style.color = "gray";
                selectedShip = " ";

                currentShipsOnBoard += 1;
                number.id = currentShipsOnBoard;
                break;
            case "cruiser":
                document.querySelector('#cruiser').id = "cruiser-Selected";
                document.querySelector('#cruiser-Selected').style.color = "gray";
                selectedShip = " ";

                currentShipsOnBoard += 1;
                number.id = currentShipsOnBoard;
                break;
            case "submarine":
                document.querySelector('#submarine').id = "submarine-Selected";
                document.querySelector('#submarine-Selected').style.color = "gray";
                selectedShip = " ";

                currentShipsOnBoard += 1;
                number.id = currentShipsOnBoard;
                break;
            case "destroyer":
                document.querySelector('#destroyer').id = "destroyer-Selected";
                document.querySelector('#destroyer-Selected').style.color = "gray";
                selectedShip = " ";

                currentShipsOnBoard += 1;
                number.id = currentShipsOnBoard;
                break;
            default:
                // console.log("Nothing/Or the ship already was selected");
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
        // console.log(displayBoardPiece);
        displayBoardPiece.dataset.ship = selectedShip;
        displayBoardPiece.style.backgroundColor  = "red";
    

        setTimeout(() => {//delayed this so that selectedShip doesnt get over-ridded too soon
            disableShipSelect();
        }, 1000);
    }
    
        // Example usage:
        // placeShipsonBoard(gameBoardArray, 2-1, 3, 'horizontal', 4);
    function highlightShipOnBoard(board,row, col, direction, count) {
        let allowShip = true;

        if (direction === 'Horizontal') {
            let difCol = col-1;
            for (let i = difCol; i < difCol + count; i++) {
                if (i >= 10 || board[row][i] === 1 || board[row][i] === null ) {
                    allowShip = false;
                    break;
                } else{
                    allowShip = true;
                }  
            }
            if(allowShip) {
                for (let i = difCol; i < difCol + count; i++) {
                    let newCol = i + 1;
                    const cell = document.querySelector(`.player1-board-piece[data-row="${row}"][data-column="${newCol}"]`);
                    cell.style.backgroundColor = 'pink';
                }
            }


        } else if (direction === 'Vertical') {
            for (let i = row; i < row + count; i++) {
                if( i >= 10 || board[i][col] === 1 || board[i][col] === null ) {
                    allowShip = false;
                    break;
                }else{
                    allowShip = true;
                }

                
            }
            if(allowShip) {
                for (let i = row; i < row + count; i++) {
                    const cell = document.querySelector(`.player1-board-piece[data-row="${i}"][data-column="${col}"]`);
                    cell.style.backgroundColor = 'pink';
                }
            }
        }
    }

    function removeHighlightOnBoard() {
        const cells = document.querySelectorAll('.player1-board-piece');
        cells.forEach((cell) => {
            if(cell.style.backgroundColor != "red"){
                cell.style.backgroundColor = ''; // Reset the background color
            }
        });

    }
}

export {placeShips};
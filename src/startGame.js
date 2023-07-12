import {players} from './player.js';
import {placeOpponentShips} from './placeOpponentShips.js';
const {player1} = players();
const {player2} = players();
const gameBoardArrayOpponent = placeOpponentShips();

function startGame(){
    const turnText = document.getElementById("turn-text");

    function checkIfAllShipsPlaced(){
        let numberTitle = document.querySelector("title");
        const player1Board = document.querySelectorAll(".player1-board-piece");

        player1Board.forEach((piece) => {
            piece.addEventListener('click', () => {
                setTimeout(() => {//delayed this so that it syncs up with disableShipSelect() in placeShips, bet I could do an await function or something 
                    if(numberTitle.id == 5){
                        console.log("Number equals 5");
                        // console.log(gameBoardArrayOpponent + "wasdwadaw");
                        turnText.textContent = "Its player1's turn";
                        // attackPlayersBoard();
                        turn();
                    }
            }, 1);

            })
        })
    }checkIfAllShipsPlaced();


function attackPlayersBoard(board, player, playerObject){
        board.forEach((piece) => {
            piece.addEventListener('click', () => {
                let hit = false;
                let miss = false;

                let playerCol = parseInt(piece.dataset.column) - 1;
                let playerRow = parseInt(piece.dataset.row);
                // console.log(playerCol + ":Col   Row:" + playerRow);
                // console.log(gameBoardArrayOpponent[playerRow]);
                const displayBoardPiece = document.querySelector(`.${player}-board-piece[data-row="${playerRow}"][data-column="${playerCol + 1}"]`);
                if (gameBoardArrayOpponent[playerRow][playerCol] === 1){//execute player dmg object function
                    let pieceSelectedShip = displayBoardPiece.dataset.ship;
                    console.log("this is the displayBoardPiece: " +displayBoardPiece.dataset.ship);
                    console.log(playerObject);
                    playerObject[pieceSelectedShip].dmg += 1;
                    console.log(playerObject);

                    hit = true;
                    displayHitOrMiss(displayBoardPiece,hit, miss);
                    shipSunk(pieceSelectedShip);

                }else if(gameBoardArrayOpponent[playerRow][playerCol] === 0){
                    miss = true;
                    displayHitOrMiss(displayBoardPiece,hit, miss);
                    console.log("You Missed");////////////////////////////////////This should eventually be textcontent
                };

                function shipSunk(pieceSelectedShip){
                    if(playerObject[pieceSelectedShip].dmg === playerObject[pieceSelectedShip].health){
                        playerObject[pieceSelectedShip].isSunk = true;
                        console.log(playerObject[pieceSelectedShip].isSunk);
                        console.log(pieceSelectedShip +" has been sunk!");///////////////////////////////This should eventually be textcontent

                        endGame(playerObject);
                    }else{
                        console.log("You Hit");
                    };

                }
            })
        })
    };


    function displayHitOrMiss(displayBoardPiece, hit, miss){
        if(hit){
            displayBoardPiece.style.backgroundColor = "red";
        }else if(miss){
            displayBoardPiece.style.backgroundColor = "black";
            turn();
        }
    }


    let currentPlayer = "player2";
    function turn(){// switch players
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
            turnText.textContent = "It's " + currentPlayer + " turn";
            console.log("Its player2's turn");

            const player1Board = document.querySelectorAll(".player1-board-piece");
            attackPlayersBoard(player1Board, currentPlayer, player1);

        } else {
            currentPlayer = "player1";
            turnText.textContent = "It's " + "player1" + " turn";
            console.log("Its player1's turn");

            const player2Board = document.querySelectorAll(".player2-board-piece");
            attackPlayersBoard(player2Board, "player2", player2);
            }
    };


    function endGame(playerObject){///////////////////////////////////////Needs to stop you from clicking buttons
        if(!playerObject.carrier.isSunk){
            return;
        }
        if(!playerObject.battleship.isSunk){
            return;
        }
        if(!playerObject.cruiser.isSunk){
            return;
        }
        if(!playerObject.submarine.isSunk){
            return;
        }
        if(!playerObject.destroyer.isSunk){
            return;
        }else {
            if(playerObject == player1){
                turnText.textContent = "Player2 wins the game!";
            }else{
                turnText.textContent = "Player1 wins the game!";
            }
        }
    }

};
export {startGame}
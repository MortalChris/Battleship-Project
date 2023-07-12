import {players} from './player.js';
import {placeOpponentShips} from './placeOpponentShips.js';
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
                        attackPlayer2Board();
                        // turn();
                    }
            }, 1);

            })
        })
    }checkIfAllShipsPlaced();


function attackPlayer2Board(){
    const player2Board = document.querySelectorAll(".player2-board-piece");

        player2Board.forEach((piece) => {
            piece.addEventListener('click', () => {
                let hit = false;
                let miss = false;

                let p2Col = parseInt(piece.dataset.column) - 1;
                let p2Row = parseInt(piece.dataset.row);
                // console.log(p2Col + ":Col   Row:" + p2Row);
                // console.log(gameBoardArrayOpponent[p2Row]);
                const displayBoardPiece2 = document.querySelector(`.player2-board-piece[data-row="${p2Row}"][data-column="${p2Col + 1}"]`);
                if (gameBoardArrayOpponent[p2Row][p2Col] === 1){//execute player2 dmg object function
                    let pieceSelectedShip = displayBoardPiece2.dataset.ship;
                    // console.log(displayBoardPiece2.dataset.ship);
                    console.log(player2);
                    player2[pieceSelectedShip].dmg += 1;
                    console.log(player2);

                    hit =  true;
                    displayHitOrMiss(displayBoardPiece2,hit, miss);
                    shipSunk(pieceSelectedShip);

                }else if(gameBoardArrayOpponent[p2Row][p2Col] === 0){
                    miss = true;
                    displayHitOrMiss(displayBoardPiece2,hit, miss);
                    console.log("You Missed");////////////////////////////////////This should eventually be textcontent
                };

                function shipSunk(pieceSelectedShip){
                    if(player2[pieceSelectedShip].dmg === player2[pieceSelectedShip].health){
                        player2[pieceSelectedShip].isSunk = true;
                        console.log(player2[pieceSelectedShip].isSunk);
                        console.log(pieceSelectedShip +" has been sunk!");///////////////////////////////This should eventually be textcontent

                        endGame(player2);
                    }else{
                        console.log("You Hit");
                    };

                }
            })
        })
    };


    function displayHitOrMiss(displayBoardPiece2, hit, miss){
        if(hit){
            displayBoardPiece2.style.backgroundColor = "red";
        }else if(miss){
            displayBoardPiece2.style.backgroundColor = "black";
            turn();
        }
    }


    let currentPlayer = "player1";
    function turn(){// switch players
        if (currentPlayer === "player1") {
            currentPlayer = "player2";
            turnText.textContent = "It's " + currentPlayer + " turn";
            console.log("Its player2's turn");
        } else {
            currentPlayer = "player1";
            turnText.textContent = "It's " + currentPlayer + " turn";
            console.log("Its player1's turn");
            }
    };


    function endGame(player){///////////////////////////////////////Needs to stop you from clicking buttons
        if(!player.carrier.isSunk){
            return;
        }
        if(!player.battleship.isSunk){
            return;
        }
        if(!player.cruiser.isSunk){
            return;
        }
        if(!player.submarine.isSunk){
            return;
        }
        if(!player.destroyer.isSunk){
            return;
        }else {
            if(player == player2){
                turnText.textContent = "Player1 wins the game";
            }else{
                turnText.textContent = "Player2 wins the game";
            }
        }
    }

};
export {startGame}
import {placeOpponentShips} from './placeOpponentShips.js';
import {players} from './player.js';
const {player2} = players();
placeOpponentShips();


function startGame(){
const turnText = document.getElementById("turn-text");

    function checkIfAllShipsPlaced(){
        let numberTitle = document.querySelector("title");
        const player1Board = document.querySelectorAll(".player1-board-piece");

        player1Board.forEach((piece) => {
            piece.addEventListener('click', () => {
                if(numberTitle.id == 5){
                    console.log("Number equals 5");
                    turnText.textContent = "Its player1's turn";
                    attackPlayer2Board();
                    // turn();
                }
            })
        })
    }checkIfAllShipsPlaced();


    function attackPlayer2Board(){
        const player2Board = document.querySelectorAll(".player2-board-piece");
        player2Board.forEach((piece) => {
            piece.addEventListener('click', () => {
                let p2Col = piece.dataset.column;
                let p2Row = piece.dataset.column;
                
                if (gameBoardArrayOpponent[p2Row][p2Col] === 1){
                    //execute player2 dmg object function
                    player2[selectedShip].hit();
                }else{
                    console.log("You Missed");
                }
            })
        })
    };


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


}

export {startGame}
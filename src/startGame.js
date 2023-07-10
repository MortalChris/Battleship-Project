function startGame(){

    function checkIfAllShipsPlaced(){
        let numberTitle = document.querySelector("title");
        const currentShip = document.querySelectorAll(".player1-board-piece");

        currentShip.forEach((piece) => {
            piece.addEventListener('click', () => {
                if(numberTitle.id == 5){
                    console.log("Number equals 5");
                    // turn();
                }
            })
        })
    }checkIfAllShipsPlaced();

    
    let currentPlayer = "player1";
    function turn(){// switch players
        const turnText = document.getElementById("turn-text");

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
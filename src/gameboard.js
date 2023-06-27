function gameBoardCreation(){
    let alphabet = ["A","B","C","D","E","F","G","H","I","J"];
    let column = 0;
    let row = 1;


    for(let i = 1; i < 101; i++){
        const player1Board = document.getElementById('player1-board');
            const boardPiece1 = document.createElement("button");
                boardPiece1.className = "player1-board-piece";
                boardPiece1.id = "boardPiece1-" + i;
                boardPiece1.dataset.column = alphabet[column];
                boardPiece1.dataset.row = row;
                player1Board.appendChild(boardPiece1);

            if(boardPiece1.dataset.row != "10"){
                // column++;
                row++;
            }  else{
                column++;
                row = 1;
            }
    }

    
    for(let i = 1; i < 101; i++){
        const player2Board = document.getElementById('player2-board');
            const boardPiece2 = document.createElement("button");
                boardPiece2.className = "player2-board-piece";
                boardPiece2.id = "boardPiece2-" + i;
                boardPiece2.dataset.column = alphabet[column];
                boardPiece2.dataset.row = row;
                player2Board.appendChild(boardPiece2);

                if(boardPiece2.dataset.row != "10"){
                    // column++;
                    row++;
                }  else{
                    column++;
                    row = 1;
                }
    }
};

export {gameBoardCreation};
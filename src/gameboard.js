function gameBoardCreation(){
    // let rowArray = [0,1,2,3,4,5,6,7,8,9];
    let row = 0;
    let column = 1;


    for(let i = 1; i < 101; i++){
        const player1Board = document.getElementById('player1-board');
            const boardPiece1 = document.createElement("button");
                boardPiece1.className = "player1-board-piece";
                boardPiece1.id = "boardPiece1-" + i;
                boardPiece1.dataset.row = row;
                boardPiece1.dataset.column = column;
                player1Board.appendChild(boardPiece1);

            if(boardPiece1.dataset.column != "10"){
                // column++;
                column++;
            } else if(boardPiece1.dataset.row != "10"){
                row++;
                column = 1;
            } else{
                row = 0;
            }
    }

    
    for(let i = 1; i < 101; i++){
        const player2Board = document.getElementById('player2-board');
            const boardPiece2 = document.createElement("button");
                boardPiece2.className = "player2-board-piece";
                boardPiece2.id = "boardPiece2-" + i;
                boardPiece2.dataset.row = row;
                boardPiece2.dataset.column = column;
                player2Board.appendChild(boardPiece2);

                if(boardPiece2.dataset.column != "10"){
                    // column++;
                    column++;
                } else if(boardPiece2.dataset.row != "10"){
                    row++;
                    column = 1;
                } else{
                    row = 0;
                }
};

export {gameBoardCreation};
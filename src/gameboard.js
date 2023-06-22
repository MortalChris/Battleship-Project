function gameBoardCreation(){
    for(let i = 1; i < 101; i++){
        const player1Board = document.getElementById('player1-board');
            const boardPiece1 = document.createElement("button");
            boardPiece1.className = "player1-board-piece";
            boardPiece1.id = "boardPiece1-" + i;
            player1Board.appendChild(boardPiece1);
    }

    for(let i = 1; i < 101; i++){
        const player2Board = document.getElementById('player2-board');
            const boardPiece2 = document.createElement("button");
            boardPiece2.className = "player2-board-piece";
            boardPiece2.id = "boardPiece2-" + i;
            player2Board.appendChild(boardPiece2);
    }
};

export {gameBoardCreation};
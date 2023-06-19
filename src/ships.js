function ships(){
    function shipFactory(player, carrier, battleship, cruiser, submarine, destroyer){
        return{
            player,
            carrier: {
                health: 5,
                hit: 0,
                length: 5
            },
            battleship: {
                health: 4,
                hit: 0,
                length: 4
            },
            cruiser: {
                health: 3,
                hit: 0,
                length: 3
            },
            submarine: {
                health: 3,
                hit: 0,
                length: 3
            },
            destroyer: {
                health: 2,
                hit: 0,
                length: 2
            }
        }
    };

};

export {ships}
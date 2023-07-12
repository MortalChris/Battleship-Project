function shipFunc(){
    const shipFactor ={
        // playerName(name){
        //     return{name};
        // },
            carrier: {
                health: 5,
                dmg : 0,
                hit(){
                    this.dmg++
                },
                isSunk: false,
                length: 5
            },
            battleship: {
                health: 4,
                dmg : 0,
                hit(){
                    this.dmg++
                },
                isSunk: false,
                length: 4
            },
            cruiser: {
                health: 3,
                dmg : 0,
                hit(){
                    this.dmg++
                },
                isSunk: false,
                length: 3
            },
            submarine: {
                health: 3,
                dmg : 0,
                hit(){
                    this.dmg++
                },
                isSunk: false,
                length: 3
            },
            destroyer: {
                health: 2,
                dmg : 0,
                hit(){
                    this.dmg++
                },
                isSunk: false,
                length: 2
            }
    };
    return shipFactor;
};

export {shipFunc};

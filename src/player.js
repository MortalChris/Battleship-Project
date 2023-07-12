import {shipFunc} from './ships.js';


function players(){
    const shipFactor = shipFunc();
    const player1 = Object.create(shipFactor);
    const player2 = Object.create(shipFactor);

    for (const shipName in player1) {
        if (player2.hasOwnProperty(shipName)) {
            player2[shipName].hit = player1[shipName].hit;
        }
    return{player1, player2};
    }
}
export {players};
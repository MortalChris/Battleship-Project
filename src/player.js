import {shipFunc} from './ships.js';

function players(){
    const shipFactor = shipFunc();
    const player1 = JSON.parse(JSON.stringify(shipFactor));
    const player2 = JSON.parse(JSON.stringify(shipFactor));
}
export {players}
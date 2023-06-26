import './style.css';
import {shipFunc} from './ships.js';
import {players} from './player.js';
import {gameBoardCreation} from './gameboard.js';

const shipFactor = shipFunc();
gameBoardCreation();
players();


function placeShipsonBoard(row, column, horizontal, vertical){

}
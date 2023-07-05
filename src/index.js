import './style.css';
import {shipFunc} from './ships.js';
import {players} from './player.js';
import {gameBoardCreation} from './gameboard.js';
import {placeShips} from './placeShips.js';
import {placeOpponentShips} from './placeOpponentShips.js';
// const ships = shipFunc();
gameBoardCreation();
players();


placeOpponentShips();
placeShips();

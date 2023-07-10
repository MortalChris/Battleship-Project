import './style.css';
import {shipFunc} from './ships.js';
import {players} from './player.js';
import {gameBoardCreation} from './gameboard.js';
import {placeShips} from './placeShips.js';
;
import {startGame} from './startGame.js';
// const ships = shipFunc();
gameBoardCreation();
players();

placeShips();
startGame();

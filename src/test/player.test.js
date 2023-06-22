import {players} from '../player.js';

test("This should give you ship stats of player1",() =>{
    const {player1} = players();// Destructure player1 from the result of invoking players()
    expect(player1.carrier.health).toBe(5);
})

test("This should give you ship stats of player1",() =>{
    const {player2} = players();// Destructure player2 from the result of invoking players()
    expect(player2.carrier.health).toBe(5);
})
import { shipFunc } from './ships.js';

    test("This should give you ship health",() =>{
        const ships = shipFunc();
        expect(ships.carrier.health).toBe(5);
    })
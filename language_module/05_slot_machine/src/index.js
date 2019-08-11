'use strict';

class SlotMachine  {
    constructor() {
        this.coin = 0;
    }

    play() {
        this.coin++;
        this.roulette1 = Math.random() >= 0.5;
        this.roulette2 = Math.random() >= 0.5;
        this.roulette3 = Math.random() >= 0.5;

        if (this.roulette1 && this.roulette2 && this.roulette3) {
            console.info(`Congratulations!!! You won ${this.coin} coins!!`);
            this.coin = 0;
        } else {
            console.info(`Good luck next time!!!`);
        }

    }

}

const machine = new SlotMachine();

machine.play();
machine.play();
machine.play();
machine.play();
machine.play();

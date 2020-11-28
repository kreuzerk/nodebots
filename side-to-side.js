const Tessle = require('tessel-io');
const johnnyFive = require('johnny-five');

const board = new johnnyFive.Board({
    io: new Tessle()
});

board.on('ready', () => {
    const leds = new johnnyFive.Leds(['a2', 'a3', 'a4', 'a5', 'a6', 'a7']);
    let index = 0;

    board.loop(500, () => {
        leds.off();
        leds[index].on();
        index = index === leds.length -1 ? 0 : ++index;
    });

});

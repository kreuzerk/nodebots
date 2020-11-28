const Tessel = require('tessel-io');
const johnny = require('johnny-five');

const board = new johnny.Board({
    io: new Tessel()
});

board.on('ready', () => {
    const button = new johnny.Button('a2');
    const led = new johnny.Led('a5');

    button.on('press', () => led.on());
    button.on('release', () => led.off());
})

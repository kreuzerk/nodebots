const Tessel = require('tessel-io');
const johnnyFive = require('johnny-five');
const barcli = require('barcli');

const board = new johnnyFive.Board({
    io: new Tessel(),
    repl: false,
    debug: false,
});

board.on('ready', () => {
    const graph = new barcli({
        label: 'Data from sensor',
        range: [0, 100],
    });
    const sensor = new johnnyFive.Sensor({
        pin: 'a7',
        threshold: 5 // See notes below for detailed explanation
    });
    const led = new johnnyFive.Led('b5');

    sensor.on('change', () => {
        graph.update(sensor.value);
        led.brightness(sensor.scaleTo(0, 255));
    });
})

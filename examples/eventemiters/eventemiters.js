var events = require('events');
var EventEmitter = new events.EventEmitter();
var connectHandler = function connected() {
    console.log('connection successful.');
    EventEmitter.emit('data_received');
};
EventEmitter.on('connection', connectHandler);
EventEmitter.on('data_received', function () {
    console.log('data received successful.');
});
EventEmitter.emit('connection');
console.log("Final");

const { startDriver } = require('./driver/index');
const { startVendor } = require('./vendor/index');

// manages global package events, listens to all events in event module
console.log('Everything is started.');
startDriver();
startVendor();
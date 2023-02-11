const { EVENT_NAMES, chance } = require('../utils');
const { io } = require("socket.io-client");
const events = io("ws://localhost:3003"); 

function deliver(orderId) {
  console.log('Driver has finished delivery:', orderId);
  events.emit(EVENT_NAMES.delivered, orderId);
}

function handlePickup(event) {
  console.log('Driver received a pickup event:', event.orderId);
  setTimeout(() => deliver(event.orderId), chance.integer({min: 2000, max: 15000}));
}

events.on(EVENT_NAMES.pickup, handlePickup);

console.log("Driver is ready!");

module.exports = {
  toTest: {
    deliver,
    handlePickup,
  },
};
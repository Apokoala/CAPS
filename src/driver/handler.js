const { EVENT_NAMES, chance } = require('../utils');
const { io } = require('socket.io-client');
const socket = io('ws://localhost:3003');

function handlePickUp(event) {
  // set time takes for delivery
  setTimeout(
    () => delivered(event),
    chance.integer({ min: 4500, max: 20000 })
  );
}

function delivered(event) {
  console.log(`Driver has finished delivery for order:`, event.orderId);
  socket.emit(EVENT_NAMES.delivered, event);
}

module.exports = {
  handlePickUp,
  delivered,
  socket,
};
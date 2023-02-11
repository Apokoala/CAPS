const { chance, EVENT_NAMES } = require('../utils');
const { io } = require('socket.io-client');
const socket = io('ws://localhost:3003');

function sendPickUp() {
  const event = {
    store: chance.company(),
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };
  console.log(`Vendor, ${event.store} is requesting pick up for`, event);
  // produces event with pick up/delivery information
  socket.emit(EVENT_NAMES.pickup, event);
}

function deliveryResponse(event) {
  console.log(`Vendor ${event.store } thanks you for the delivery!`, event.orderId);
}

module.exports = {
  deliveryResponse,
  sendPickUp,
  socket,
};
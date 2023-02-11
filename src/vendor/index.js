const { chance, EVENT_NAMES } = require('../utils');
const { io } = require('socket.io-client');
const events = io('ws://localhost:3003');

function sendPickup() {
  const event = {
    store: chance.city(),
    orderId: chance.guid(),
    customer: chance.name(),
    address: chance.address(),
  };

  events.emit(EVENT_NAMES.pickup, event);
  console.log('Vendor is asking for a pickup!', event);
}

function acknowledgeDelivery(orderId) {
  console.log('Thank you for the delivery!', orderId);
}

function startVendor() {
  events.on(EVENT_NAMES.delivered, acknowledgeDelivery);

  console.log('Vendor is ready!');
  sendPickup();
  setTimeout(startVendor, chance.integer({ min: 3000, max: 20000 }));
}

startVendor();
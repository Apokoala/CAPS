const { events, EVENT_NAMES, chance } = require('../events');

function handlePickUp(event) {
  console.log('Driver has reached a pick up event for order:', event.orderId);
  // set time takes for delivery
  setTimeout(
    () => delivered(event.orderId),
    chance.integer({ min: 500, max: 1000 })
  );
}

function delivered(orderId) {
  console.log('Driver has finished delivery for order:', orderId);
  events.emit(EVENT_NAMES.delivered, orderId);
}

module.exports = {
  handlePickUp,
  delivered,
};
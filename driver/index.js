const { events, EVENT_NAMES } = require('../events');
const { handlePickUp } = require('./handler');

function startDriver() {
  console.log('Driver is ready!');

  events.on(EVENT_NAMES.pickup, handlePickUp);
}

module.exports = { startDriver };
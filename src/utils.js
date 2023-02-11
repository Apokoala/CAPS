const chance = require('chance')();

const EVENT_NAMES = {
  pickup: 'pickup',
  delivered: 'delivered',
  driver_ready: 'driver_ready',
};

module.exports = {
  chance,
  EVENT_NAMES,
};
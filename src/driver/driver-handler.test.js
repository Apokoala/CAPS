const { handlePickUp, delivered, socket } = require('./handler');
const { EVENT_NAMES } = require('../utils');

describe('Driver', () => {
  let event;
  let spy;

  beforeEach(() => {
    event = {
      orderId: '12345'
    };
    spy = jest.spyOn(socket, 'emit');
  });

  afterEach(() => {
    spy.mockRestore();
  });

  test('delivered should log a message and emit the delivered event', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    delivered(event);
    expect(console.log).toHaveBeenCalledWith(`Driver has finished delivery for order:`, event.orderId);
    expect(spy).toHaveBeenCalledWith("Driver has finished delivery for order:", event.orderId);
  });
  
});
const { sendPickUp, deliveryResponse, socket } = require('./handler');
const { EVENT_NAMES } = require('../utils');

describe('Vendor', () => {
  let event;
  let spy;

  beforeEach(() => {
    event = {
      store: 'Test Store',
      orderId: '12345',
      customer: 'Test Customer',
      address: 'Test Address'
    };
    spy = jest.spyOn(socket, 'emit');
  });

  afterEach(() => {
    spy.mockRestore();
  });

  test('sendPickUp should log a message and emit the pickup event', () => {
    sendPickUp();
    expect(spy).toHaveBeenCalledWith(EVENT_NAMES.pickup, expect.objectContaining({
      store: expect.any(String),
      orderId: expect.any(String),
      customer: expect.any(String),
      address: expect.any(String)
    }));
  });

  test('deliveryResponse should log a message', () => {
    const spyOn = jest.spyOn(console, 'log').mockImplementation(() => {});
    deliveryResponse(event);
    expect(spyOn).toHaveBeenCalledWith(`Vendor ${event.store } thanks you for the delivery!`, event.orderId);
  });
});

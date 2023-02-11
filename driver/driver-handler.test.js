const { events, EVENT_NAMES } = require('../events');
const { delivered, handlePickUp } = require('./handler');

jest.useFakeTimers();

describe('Driver tests', () => {
  test('Driver Pick Up', () => {
    // arrange
    const emitMock = jest.spyOn(events, 'emit');

    // act
    handlePickUp({
      store: 'testStore',
      orderId: '12345',
      customer: 'testName',
      address: '111 test',
    });

    // timers - skip setTimeout
    jest.runAllTimers();

    //assert
    expect(emitMock).toHaveBeenCalledWith(EVENT_NAMES.delivered, '12345');
  });

  test('Driver Delivery', () => {
    // arrange
    const emitMock = jest.spyOn(events, 'emit');
    // act
    delivered('12345');
    // assert
    expect(emitMock).toHaveBeenCalledWith(EVENT_NAMES.delivered, '12345');
  });
});
const { Server } = require('socket.io');
const { EVENT_NAMES } = require('./src/utils');
const Queue = require('./src/queue');

const io = new Server(3003);
const driverQueue = new Queue();
const vendorQueue = new Queue();

io.on('connection', socket => {
  console.log('New Connection:', socket.id);
  
  socket.on(EVENT_NAMES.driver_ready, driver => {
    console.log(`Driver ${driver.name} is ready for a pickup.`);
    driverQueue.enqueue(driver.name);
    console.log(driverQueue);
  });
  
  socket.on(EVENT_NAMES.pickup, pickup => {
    console.log('HUB pickup:', socket.id, pickup.orderId);
    vendorQueue.enqueue(pickup);
    
    const name = driverQueue.dequeue();
    if (name) {
      io.emit(EVENT_NAMES.pickup, pickup);
      console.log(`${name} has reached the pickup event for order:`, pickup.orderId);
    } else {
      console.log('No drivers are currently available.');
    }
  });
  
  socket.on(EVENT_NAMES.delivered, delivered => {
    console.log('HUB delivered:', socket.id, delivered);
    vendorQueue.dequeue(delivered);
    io.emit(EVENT_NAMES.delivered, delivered);
  });
});

console.log('Everything is working properly.');
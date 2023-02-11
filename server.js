const io = require('socket.io')(3003);

io.on('connection', (socket) => {
  console.log('New client connected');
});

console.log('Server is running on port 3003');
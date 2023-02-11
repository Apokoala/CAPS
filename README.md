# CAPS: Code Academy Parcel Service
<br>

### Project: CAPS

### Author: Michael Gazaway

### Setup: Chance, Jest, Socket.io are the big ones outside of what is in the package.json

### Tests: Jest

### Functionality

![caps](https://i.ibb.co/S0yZMCw/CAPS.jpg)

## How it all works:

> So, socket.io is a real-time communication library that enables bi-directional communication. In this scenario we have a vendor and driver that are using Socket.io to communicate with each other. Well assume this transaction starts with the vendor, who uses a function (event driven) to emit an event with information about the package, the order ID, etc to the driver, through the socket.

> The drivers listener would then receive this event and set and begin delivering the package. when the delivery is made the 'delivered' the event triggers a function. which would sent a message a log indicating that the delivery had been made.

>This is taken in by the Vendors event listener...badabing..badaboom.
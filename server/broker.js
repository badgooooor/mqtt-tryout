var mosca = require('mosca');
var settings = {
		port:1883
}

var broker = new mosca.Server(settings);

broker.on('ready', () => {
	console.log("Broker is up and running.");
})

broker.on('published', (client) => {
	console.log('+ Client connected : ',client.id);
})

broker.on('published', (packet, client) => {
	console.log('Published        : ', packet.payload.toString());
})

broker.on('subscribed', (topic, client) => {
	console.log('Subscribed       : ', topic);
})

broker.on('unsubscribed', (topic, client) => {
	console.log('Unsubscribed     : ', topic);
})

broker.on('clientDisconnecting', (client) => {
	console.log('clientDisconnecting : ', client.id);
})

broker.on('clientDisconnected', (client) => {
	console.log('clientDisconnected : ', client.id);
})
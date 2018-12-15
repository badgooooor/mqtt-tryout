var mqtt = require('mqtt')

brokerIp = 'mqtt://your-ip';
var client  = mqtt.connect(brokerIp);

client.on('connect',() => {
    client.subscribe('heyDude')
})

client.on('message',(topic, message) => {
    context = message.toString();
    console.log(context)
})
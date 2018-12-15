var mqtt = require('mqtt');

brokerIp = 'mqtt://your-ip';
var client  = mqtt.connect(brokerIp);
var topic = "heyDude";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

client.on('connect',() => {
    let payload = "";
    console.log('Connected to the broker!');
    getInput(topic);
});

function getInput(topic) {
    let payload = "";
    readline.question(`Type some message : `, (message) => {
        payload = message;
        publish("heyDude", payload);
        getInput();
    });
}

function publish(topic, msg) {
    console.log("Publishing ", msg);
    if(client.connected == true) {
        client.publish(topic, msg);
    }
}
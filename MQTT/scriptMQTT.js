let client;
const broker = 'ws://broker.hivemq.com:8000/mqtt';
const topic = 'test/topic';

document.getElementById('connectBtn').addEventListener('click', () => {
    client = new Paho.MQTT.Client(broker, 'clientId');
    client.onMessageArrived = onMessageArrived;
    client.connect({
        onSuccess: onConnect
    });
});

document.getElementById('sendMessageBtn').addEventListener('click', () => {
    const message = new Paho.MQTT.Message('Olá MQTT');
    message.destinationName = topic;
    client.send(message);
});

function onConnect() {
    client.subscribe(topic);
    document.getElementById('messages').innerHTML += '<p>Conectado e inscrito no tópico.</p>';
}

function onMessageArrived(message) {
    document.getElementById('messages').innerHTML += `<p>Mensagem recebida: ${message.payloadString}</p>`;
}

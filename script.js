const serverURL = 'https://joaop1414.github.io/fnf-control-site/sendCommand';  // URL do WebSocket ou API

const ws = new WebSocket('wss://YOUR_REPLIT_WEBSOCKET_URL');  // Substitua com a URL do WebSocket do Replit

ws.onopen = () => {
    console.log('Conectado ao WebSocket');
};

function sendCommand(command) {
    ws.send(command);  // Envia o comando para o WebSocket
}

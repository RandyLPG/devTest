import { sendData } from './apiService';

const socketUrl = 'wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD';

const connectWebSocket = () => {
  const socket = new WebSocket(socketUrl);

  socket.onopen = () => {
    console.log('WebSocket connected');
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.table === 'orderBookL2_25') {
      const { data: orders } = data;
      orders.forEach(order => {
        sendData(order);
      });
    }
  };

  socket.onclose = () => {
    console.log('WebSocket disconnected');
  };

  socket.onerror = (error) => {
    console.error('WebSocket error:', error);
  };
};

export default connectWebSocket;

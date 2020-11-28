import * as Sockette from 'sockette';
import { ws } from './config';

const ws = new Sockette(ws.url, {
  timeout: ws.timeout,
  maxAttempts: ws.maxAttempts,
  onopen: (e) => console.log('Connected!', e),
  onmessage: (e) => console.log('Received:', e),
  onreconnect: (e) => console.log('Reconnecting...', e),
  onmaximum: (e) => console.log('Stop Attempting!', e),
  onclose: (e) => console.log('Closed!', e),
  onerror: (e) => console.log('Error:', e),
});

ws.send('Hello, world!');
ws.json({ type: 'ping' });
ws.close(); // graceful shutdown

// Reconnect 10s later
setTimeout(ws.reconnect, 10e3);

// TODO write to state

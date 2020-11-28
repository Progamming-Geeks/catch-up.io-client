import io from 'socket.io-client';
import * as config from './config';
import {
  map,
  obstacles,
  players,
  seeker,
  updatePlayer,
  socketId,
} from './store';

const socket = io(config.ws);

socket.on('connection', (conn) => {
  console.log('connection', conn);
  socketId.set(conn.id);
});

socket.on('map-updated', (update) => {
  console.log('map-updated', update);
  obstacles.set(update.obstacles);
  map.set({ width: update.width, height: update.height });
  players.set(update.player);
  seeker.set(update.seeker);
});

socket.on('player-updated', () => {
  console.log('player-updated', player);
  updatePlayer(player);
});

socket.on('player-leaved', () => {
  console.log('player-leaved', player);
  removePlayer(player);
});

import io from 'socket.io-client/dist/socket.io.js';
import { config } from './config';
import {
  map,
  obstacles,
  players,
  seeker,
  updatePlayer,
  removePlayer,
  socketId,
} from './store';

const socket = io(config.ws);

socket.on('map-updated', (update) => {
  console.log('map-updated', update);
  socketId.set(socket.id);
  obstacles.set(update.obstacles);
  map.set({ width: update.width, height: update.height });
  players.set(update.players);
  seeker.set(update.seeker);
});

socket.on('player-updated', (player) => {
  console.log('player-updated', player);
  updatePlayer(player);
  console.log('result', player.id, player.size);
});

socket.on('player-leaved', (player) => {
  console.log('player-leaved', player);
  removePlayer(player);
});

export function updateColor(color) {
  console.log('updateColor');
  socket.emit('update-color', { color });
}

export function updateName(name) {
  console.log('updateName');
  socket.emit('update-name', { name });
}

export function leaveGame() {
  console.log('leaveGame');
  socket.emit('leave-game');
}

export function startGame() {
  console.log('startGame');
  socket.emit('start-game');
}

export function movePlayer({ x, y }) {
  console.log('movePlayer');
  socket.emit('move-player', { x, y });
}

export function rotatePlayer(rotation) {
  console.log('rotatePlayer');
  socket.emit('rotate-player', { rotation });
}

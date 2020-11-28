import { get, writable } from 'svelte/store';

export const gameStatus = writable('playing');

export const map = writable({
  height: 600,
  width: 800,
});

export const seeker = writable({
  name: '',
  x: 100,
  y: 100,
  color: '#333',
  size: 1,
  rotation: 0,
  id: NaN,
});

export const socketId = writable(NaN);

export const thisPlayer = derived(
  [players, socketId],
  ([$players, $socketId]) => $players.find(({ id }) => (id = $socketId))
);

export const players = writable([]);

export const obstacles = writable([]);

export function updatePlayer(player) {
  const all = get(players);
  const filtered = all.filter((p) => p.id !== player.id);
  players.set([...filtered, player]);
}

export function removePlayer(player) {
  const all = get(players);
  const filtered = all.filter((p) => p.id !== player.id);
  players.set([...filtered]);
}

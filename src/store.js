import { get, writable, derived } from 'svelte/store';

export const gameStatus = writable('playing');

export const map = writable({
  height: 2000,
  width: 2000,
});

export const seeker = writable({});

export const socketId = writable(NaN);

export const players = writable([]);

export const otherPlayers = derived(
  [players, socketId],
  ([$players, $socketId]) => {
    return ($players || []).filter((player) => player.id !== $socketId);
  }
);

export const thisPlayer = derived(
  [players, socketId],
  ([$players, $socketId]) => {
    const result = ($players || []).find(({ id }) => id === $socketId) || {
      name: '',
      x: 0,
      y: 100,
      color: '#fff',
      viewRange: 1,
      size: 6,
      rotation: 0,
      id: NaN,
    };
    return result;
  }
);

export const obstacles = writable([]);

export function updatePlayer(player) {
  const all = get(players);
  const filtered = all.filter((p) => p.id !== player.id);
  players.set([...filtered, { ...player }]);
}

export function removePlayer(player) {
  const all = get(players) || [];
  const filtered = all.filter((p) => p.id !== player.id);
  players.set([...filtered]);
}

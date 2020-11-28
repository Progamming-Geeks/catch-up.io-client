<script>
  import { getScene, getSpawner } from 'svelte-phaser';
  import OtherPlayer from './OtherPlayer.svelte';

  const scene = getScene();
  const { spawn } = getSpawner();

  // TODO get players from store
  let players = [];
</script>

{#each players as player (player.key)}
  <OtherPlayer
    x={player.x}
    y={player.y}
    height={player.height}
    width={player.width} />
{/each}

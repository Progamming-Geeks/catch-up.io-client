<script>
  import { getScene, getSpawner } from 'svelte-phaser';
  import Obstacle from './Obstacle.svelte';

  const scene = getScene();
  const { spawn } = getSpawner();

  // TODO get obstacle from store and render
  let obstacles = [];
</script>

{#each obstacles as obstacle (obstacle.key)}
  <Obstacle
    x={obstacle.x}
    y={obstacle.y}
    height={obstacle.height}
    width={obstacle.width} />
{/each}

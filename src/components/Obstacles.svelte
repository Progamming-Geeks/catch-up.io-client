<script>
  import Obstacle from './Obstacle.svelte';
  import { obstacles } from '../store';
</script>

{#each $obstacles as obstacle (obstacle.key)}
  <Obstacle
    x={obstacle.x}
    y={obstacle.y}
    height={obstacle.height}
    width={obstacle.width} />
{/each}

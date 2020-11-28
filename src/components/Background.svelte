<script>
  import { TileSprite, onGameEvent } from 'svelte-phaser';
  import { map } from '../store';
</script>

<TileSprite
  depth={-1}
  x={0}
  y={0}
  width={$map.width}
  height={$map.height}
  originX={0}
  originY={0}
  texture="textures/grass" />

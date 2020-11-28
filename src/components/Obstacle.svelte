<script>
  import { Rectangle, TileSprite, ArcadePhysics } from 'svelte-phaser';

  export let x;
  export let y;
  export let width;
  export let height;
</script>

<TileSprite
  name="obstacle"
  {x}
  {y}
  {width}
  {height}
  texture="textures/obstacle">
  <ArcadePhysics immovable />
</TileSprite>

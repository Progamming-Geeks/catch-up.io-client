<script>
  import { Sprite, ArcadePhysics, ArcadeCollider } from 'svelte-phaser';

  export let x;
  export let y;
  export let width;
  export let height;
</script>

<Sprite name="obstacle" {x} {y} {width} {height} />

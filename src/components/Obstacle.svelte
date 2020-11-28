<script>
  import { Rectangle } from 'svelte-phaser';

  export let x;
  export let y;
  export let width;
  export let height;
</script>

<Rectangle name="obstacle" {x} {y} {width} {height} fillColor={0xff000} />

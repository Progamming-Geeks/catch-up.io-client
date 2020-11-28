<script>
  import {
    Ellipse,
    Sprite,
    ArcadePhysics,
    ArcadeCollider,
  } from 'svelte-phaser';

  $: {
    console.log('reactive', player);
  }

  function hexStringToNumber(hex) {
    return parseInt(hex.replace('#', ''), 16);
  }

  $: {
    console.log('player.size', player.size);
  }

  export let player;
</script>

<Ellipse
  depth={11}
  x={player.x}
  y={player.y}
  width={10 * player.size}
  height={10 * player.size}
  angle={player.rotation}
  fillColor={hexStringToNumber(player.color)} />

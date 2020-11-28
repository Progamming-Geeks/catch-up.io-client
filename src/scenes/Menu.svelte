<script>
  import { Scene, Text } from 'svelte-phaser';

  let game;

  $: window.game = game;

  function preload(scene) {}

  function create(scene) {}
</script>

<Scene key="menu">
  <Text x={400} y={100} text={`Menu`} />
  <Text x={400} y={130} text={`Click to start`} />
</Scene>

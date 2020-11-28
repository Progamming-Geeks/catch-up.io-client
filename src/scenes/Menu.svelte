<script>
  import { Scene, Text, getScene, onInputEvent } from 'svelte-phaser';

  const scene = getScene();

  function preload(scene) {}

  function create(scene) {}
</script>

<Scene key="menu">
  <Text x={400} y={100} text={`Menu`} />
  <Text x={400} y={130} text={`Click to start`} />
</Scene>

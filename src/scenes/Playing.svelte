<script>
  import { Scene, Spawner } from 'svelte-phaser';
  import fragment from 'svelte-fragment';

  import LoadingBar from '../components/LoadingBar.svelte';
  import Background from '../components/Background.svelte';
  import Player from '../components/Player.svelte';
  import UI from '../components/UI.svelte';
  import Obstacles from '../components/Obstacles.svelte';

  let game;

  $: window.game = game;

  function preload(scene) {
    scene.load.image('textures/starfield', 'assets/starfield.png');
    scene.load.spritesheet('textures/enemy', 'assets/invader.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    scene.load.spritesheet('textures/explosion', 'assets/explode.png', {
      frameWidth: 128,
      frameHeight: 128,
    });
    scene.load.image('textures/player', 'assets/ship.png');
    scene.load.image('textures/player/bullet', 'assets/bullet.png');
    scene.load.image('textures/enemy/bullet', 'assets/enemy-bullet.png');
  }

  function create(scene) {}
</script>

<Scene key="main" {preload} {create}>
  <template use:fragment slot="loading" let:progress>
    <LoadingBar x={400} y={300} {progress} />
  </template>

  <Spawner>
    <Background />
    <Obstacles />
    <Player x={300} y={500} />
    <UI />
  </Spawner>
</Scene>

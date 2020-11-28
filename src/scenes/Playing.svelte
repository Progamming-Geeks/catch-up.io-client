<script>
  import { Scene, Spawner, Camera, Text } from 'svelte-phaser';
  import { thisPlayer } from '../store';
  import fragment from 'svelte-fragment';

  import LoadingBar from '../components/LoadingBar.svelte';
  import Background from '../components/Background.svelte';
  import Player from '../components/Player.svelte';
  import UI from '../components/UI.svelte';
  import ViewRange from '../components/ViewRange.svelte';
  import Obstacles from '../components/Obstacles.svelte';
  import OtherPlayers from '../components/OtherPlayers.svelte';

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
    scene.load.image('textures/obstacle', 'assets/obstacle.png');
    scene.load.image('textures/enemy/bullet', 'assets/enemy-bullet.png');
    scene.load.image('textures/view-range', 'assets/view-range.png');
    scene.load.image('textures/grass', 'assets/grass.png');
  }

  function create(scene) {}
</script>

<Scene key="main" {preload} {create}>
  <template use:fragment slot="loading" let:progress>
    <LoadingBar x={400} y={300} {progress} />
  </template>

  <Spawner>
    <Camera
      width={400}
      height={400}
      follow="player"
      zoom={4}
      lerp={0.3}
      followOffsetX={200}
      followOffsetY={200}>
      <!-- <ViewRange /> -->
      <Text text={`Players`} />
      <UI />
    </Camera>
    <Background />
    <Obstacles />
    <Player x={300} y={500} />
    <OtherPlayers />
  </Spawner>
</Scene>

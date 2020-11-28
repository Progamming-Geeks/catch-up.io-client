<script>
  import {
    TileSprite,
    Sprite,
    Ellipse,
    ArcadePhysics,
    ArcadeCollider,
    getScene,
    getSpawner,
    onGameEvent,
  } from 'svelte-phaser';
  import { movePlayer } from '../socket';
  import { thisPlayer } from '../store';

  export let x;
  export let y;
  export let instance = undefined;

  const scene = getScene();
  const X_SPEED = 200;
  const Y_SPEED = 200;
  const keys = {
    left: scene.input.keyboard.addKey('left'),
    right: scene.input.keyboard.addKey('right'),
    up: scene.input.keyboard.addKey('up'),
    down: scene.input.keyboard.addKey('down'),
  };

  let velocityX = 0;
  let velocityY = 0;

  let lastX, lastY;

  // handle key inputs
  onGameEvent('step', () => {
    if (lastX !== instance.x || lastY !== instance.y) {
      x = instance.x;
      y = instance.y;
      lastX = instance.x;
      lastY = instance.y;
      movePlayer({ x: instance.x, y: instance.y });
    }

    if (
      (!keys.left.isDown && !keys.right.isDown) ||
      (keys.left.isDown && keys.right.isDown)
    ) {
      velocityX = 0;
    } else if (keys.left.isDown) {
      velocityX = -X_SPEED;
    } else if (keys.right.isDown) {
      velocityX = X_SPEED;
    }

    if (
      (!keys.down.isDown && !keys.up.isDown) ||
      (keys.down.isDown && keys.up.isDown)
    ) {
      velocityY = 0;
    } else if (keys.up.isDown) {
      velocityY = -Y_SPEED;
    } else if (keys.down.isDown) {
      velocityY = Y_SPEED;
    }
  });

  function hexStringToNumber(hex) {
    return parseInt(hex.replace('#', ''), 16);
  }
</script>

<Ellipse
  depth={10}
  {x}
  {y}
  width={10 * $thisPlayer.size}
  height={10 * $thisPlayer.size}
  fillColor={hexStringToNumber($thisPlayer.color)} />
<TileSprite
  bind:instance
  depth={10}
  width={10 * $thisPlayer.size}
  height={10 * $thisPlayer.size}
  name="player"
  {x}
  {y}>
  <ArcadeCollider with={['obstacle', 'other-player']} />
  <ArcadePhysics {velocityX} {velocityY} collideWorldBounds />
</TileSprite>

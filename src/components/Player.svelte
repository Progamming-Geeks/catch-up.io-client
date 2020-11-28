<script>
  import {
    Sprite,
    ArcadePhysics,
    ArcadeCollider,
    getScene,
    getSpawner,
    onGameEvent,
  } from 'svelte-phaser'

  export let x
  export let y
  export let instance = undefined

  const scene = getScene()
  const X_SPEED = 200
  const Y_SPEED = 200
  const keys = {
    left: scene.input.keyboard.addKey('left'),
    right: scene.input.keyboard.addKey('right'),
    up: scene.input.keyboard.addKey('up'),
    down: scene.input.keyboard.addKey('down'),
  }

  let velocityX = 0
  let velocityY = 0

  // handle key inputs
  onGameEvent('step', () => {
    if (
      (!keys.left.isDown && !keys.right.isDown) ||
      (keys.left.isDown && keys.right.isDown)
    ) {
      velocityX = 0
    } else if (keys.left.isDown) {
      velocityX = -X_SPEED
    } else if (keys.right.isDown) {
      velocityX = X_SPEED
    }

    if (
      (!keys.down.isDown && !keys.up.isDown) ||
      (keys.down.isDown && keys.up.isDown)
    ) {
      velocityY = 0
    } else if (keys.up.isDown) {
      velocityY = -Y_SPEED
    } else if (keys.down.isDown) {
      velocityY = Y_SPEED
    }
  })
</script>

<Sprite
  bind:instance
  depth={10}
  name="player"
  texture="textures/player"
  {x}
  {y}>
  <ArcadeCollider
    with={['obstacle', 'player', 'other-player']}
    overlapOnly
    on:collide={() => lives.update((prev) => prev - 1)} />
  <ArcadePhysics {velocityX} {velocityY} collideWorldBounds />
</Sprite>

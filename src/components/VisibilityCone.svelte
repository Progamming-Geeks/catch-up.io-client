<script>
  import { Sprite, ArcadePhysics } from 'svelte-phaser';
</script>

<Sprite depth={10} name="player" texture="textures/player" {x} {y}>
  <!-- TODO I have no idea how, but we need a visiblity cone -->
</Sprite>

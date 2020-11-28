<script>
  import Phaser from 'phaser';
  import { Game } from 'svelte-phaser';
  import { gameStatus } from './store';
  import Menu from './scenes/Menu.svelte';
  import Playing from './scenes/Playing.svelte';
  import { updateColor, updateName, startGame } from './socket';
  import { map } from './store';

  let game;

  // $: window.game = game;

  startGame();
</script>

<style>
  :global(body) {
    margin: 0;
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>

<Game
  bind:instance={game}
  width={$map.width}
  height={$map.height}
  physics={{ default: 'arcade' }}
  scale={{ mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH }}>
  {#if $gameStatus === 'menu'}
    <Menu />
  {:else if $gameStatus === 'playing'}
    <Playing />
  {/if}
</Game>

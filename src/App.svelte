<script>
  import Phaser from 'phaser';
  import { Game } from 'svelte-phaser';
  import { gameStatus } from './store';
  import Menu from './scenes/Menu.svelte';
  import Playing from './scenes/Playing.svelte';

  let game;

  $: window.game = game;
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
  width={800}
  height={600}
  physics={{ default: 'arcade' }}
  scale={{ mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH }}>
  {#if $gameStatus === 'menu'}
    <Menu />
  {:else if $gameStatus === 'playing'}
    <Playing />
  {/if}
</Game>

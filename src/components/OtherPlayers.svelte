<script>
  import { otherPlayers } from '../store';
  import OtherPlayer from './OtherPlayer.svelte';
</script>

{#each $otherPlayers as player (player.id)}
  <OtherPlayer {player} />
{/each}

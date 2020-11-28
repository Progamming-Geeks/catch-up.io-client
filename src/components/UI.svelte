<script>
  import { Text, onInputEvent } from 'svelte-phaser';
  import { otherPlayers, seeker } from '../store';

  // TODO update UI

  // onInputEvent('pointerdown', () => {
  //   if ($gameStatus !== 'playing') {
  //     reset();
  //   }
  // });
</script>

<Text
  x={0}
  y={0}
  text={`Players: ${$otherPlayers.length + 1}`}
  depth={1000}
  fontSize={'64px'}
  color={'#fff'} />
<Text
  x={0}
  y={70}
  text={`Seeker: ${$seeker.name}`}
  depth={1000}
  fontSize={'64px'}
  color={'#fff'} />
<!-- <Text x={16} y={16} text={`Score: ${$score}`} />
<Text x={700} y={16} text={`Lives: ${$lives}`} />
<Text x={180} y={575} text="Move with arrow keys, shoot with spacebar" />
-->

<!-- {#if $gameStatus !== 'playing'} -->
<!-- <Text
    x={250}
    y={200}
    text={$gameStatus === 'win' ? 'You Win!' : 'Game Over'}
    fontSize="48px"
    align="center" />
  <Text x={280} y={265} text="Click to restart" fontSize="20px" /> -->
<!-- {:else} -->

<!-- <div style="color: green; font-size: 20rem; position: fixed; top: 50%; left: 50%;">Text???</div> -->

<!-- {/if} -->

<script>
    import { TileSprite } from 'svelte-phaser';
    import { gameStatus, thisPlayer } from '../store';
</script>

<!-- <Text x={16} y={16} text={`Score: ${$score}`} />
<Text x={700} y={16} text={`Lives: ${$lives}`} />
<Text x={180} y={575} text="Move with arrow keys, shoot with spacebar" />
-->

{#if $gameStatus === 'playing'}
    <TileSprite
        depth={100}
        x={$thisPlayer.x}
        y={$thisPlayer.y}
        originX={0}
        originY={0}
        scale={2000/$thisPlayer.viewRange}
        texture="textures/view-range" 
    />
{/if}

<!-- @component `WindowOverlay`

A blurred overlay across the entire screen for displaying modals or warnings over.
-->

<script lang="ts">
  
import type { MouseEventHandler } from "svelte/elements";

export let store: any | undefined = undefined;
export let exit: MouseEventHandler<HTMLElement> | undefined = undefined;


const callback = exit ?? (() => store.exit());

</script>

<div class="overlay" on:click={callback}>
  <slot>
    <p> Uh, something went wrong! Click anywhere to exit... </p>
  </slot>
</div>


<style lang="scss">

.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  backdrop-filter: blur(4px);
}

</style>

<!-- @component `WindowOverlay`

A blurred overlay across the entire screen for displaying modals or warnings over.
-->

<script lang="ts">

import type { Closable } from "#modules/types";

export let state: Closable;

</script>

<div class="overlay" on:click={$state.close}>
  <slot>
    <p> Uh, something went wrong! Click anywhere to exit... </p>
  </slot>
</div>


<style lang="scss">

.overlay-back {
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: rgba(var(--col-back), 69%);
  backdrop-filter: blur(8px);
}

</style>

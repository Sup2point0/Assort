<script>

import "#styles/font-faces.scss";
import "#styles/essence.scss";

import { prefs, popups } from "#modules/stores";

import WindowOverlay from "#parts/popups/window-overlay.svelte";
import Preferences from "#parts/popups/prefs/preferences.svelte";


$: duality = $prefs.cols.duality ?? "light";

</script>


<div
  id="page"
  class={$prefs.cols.palettes[duality]}
  class:frozen={$popups.prefs.shown}
  style:color-scheme={duality}
>
  <slot>
    <p class="error"> Uh, something went wrong! </p>
  </slot>

  {#if $popups.prefs.shown}
    <WindowOverlay exit={() => $popups.prefs.shown = false}>
      <Preferences />
    </WindowOverlay>
  {/if}
</div>


<style lang="scss">

@use './src/palettes/colours' as *;


#page {
  background-color: var(--col-back);
}

.frozen {
  overflow: hidden;
}

</style>

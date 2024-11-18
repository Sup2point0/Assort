<script>

import "#styles/font-faces.scss";
import "#styles/essence.scss";
import "#styles/prism-night-owl.css";

import { prefs, popups } from "#modules/stores";

import WindowOverlay from "#parts/popups/window-overlay.svelte";
import Preferences from "#parts/popups/prefs/preferences.svelte";

import { base } from "$app/paths";


// always fallback to light
$: duality = $prefs.cols.duality ? (
  ($prefs.cols.duality == "system") ? (
    (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark").matches
    ) ? "dark" : "light"
  )
  : ($prefs.cols.duality == "dark") ? "dark" : "light"
) : "light";

</script>


<svelte:head>
  <meta property="og:image" content="{base}/assort/cover.png" />
</svelte:head>

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

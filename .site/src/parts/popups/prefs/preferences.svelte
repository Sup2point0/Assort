<script lang="ts">

import Click from "#parts/ext/click.svelte";

import NavPrefs from "./nav.prefs.svelte";
import PrefsText from "./prefs.text.svelte";
import PrefsCols from "./prefs.cols.svelte";

import { prefs, prefsPopup } from "#modules/stores";

</script>


<div class="popup">
  <NavPrefs />

  <div class="prefs">
    <Click action="close" store={$prefsPopup}
      style:float="right" />

  {#if $prefsPopup.page == "text"}
    <PrefsText />
  {:else if $prefsPopup.page == "cols"}
    <PrefsCols />
  {:else}
  {/if}

  </div>
</div>


<style lang="scss">

.popup {
  width: min(80vw, 1600px);
  height: min(80vh, 900px);
  display: flex;
  justify-content: start;
  align-items: stretch;

  background-color: var(--col-back);
  border-radius: 1rem;
}

.prefs {
  width: 100%;
  flex-grow: 1;
  overflow: scroll;
}

</style>

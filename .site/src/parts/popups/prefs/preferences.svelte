<!-- @component `Preferences`

The overlay for configuring user preferences.
-->

<script lang="ts">

import Click from "#parts/ext/click.svelte";

import NavPrefs from "./nav.prefs.svelte";
// import PrefsText from "./prefs.text.svelte";
// import PrefsCols from "./prefs.cols.svelte";

import { popups } from "#modules/stores";


$: prefs = $popups.prefs;

</script>


<div class="popup">
  <NavPrefs />

  <div class="prefs">
    <div style:float="right">
      <Click button={() => prefs.shown = false}>
        X
      </Click>
    </div>

  {#if prefs.page == "text"}
    <!-- <PrefsText /> -->
  {:else if prefs.page == "cols"}
    <!-- <PrefsCols /> -->
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

  background-color: var(--col-back, white);
  border-radius: 1rem;
}

.prefs {
  width: 100%;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: scroll;
}

</style>

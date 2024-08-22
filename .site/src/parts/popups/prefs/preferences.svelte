<!-- @component `Preferences`

The overlay for configuring user preferences.
-->

<script lang="ts">

import Click from "#parts/ext/click.svelte";

import NavPrefs from "./nav.prefs.svelte";
import PrefsText from "./prefs.text.svelte";
// import PrefsCols from "./prefs.cols.svelte";

import { popups } from "#modules/stores";

</script>


<div class="popup" on:click={event => event.stopPropagation()}>
  <NavPrefs />

  <div class="prefs">
    <div style:float="right">
      <Click button={() => $popups.prefs.shown = false}>
        X
      </Click>
    </div>

    <div class="content">
      {#if $popups.prefs.page == "text"}
        <PrefsText />
      {:else if $popups.prefs.page == "cols"}
        <!-- <PrefsCols /> -->
      {:else}
      {/if}
    </div>

  </div>
</div>


<style lang="scss">

.popup {
  width: min(80vw, 1600px);
  height: min(80vh, 900px);
  display: flex;
  justify-content: start;
  align-items: stretch;

  background-color: var(--col-back-deut);
  border-radius: 1rem;
}

.prefs {
  width: 100%;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: scroll;
}

.content {
  padding: 0.5rem 1rem;
  color: var(--col-text);
  text-align: left;
}

</style>

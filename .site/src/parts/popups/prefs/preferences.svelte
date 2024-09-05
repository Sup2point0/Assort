<!-- @component `Preferences`

The overlay for configuring user preferences.
-->

<script lang="ts">

import Click from "#parts/ext/click.svelte";

import PrefsNav from "./nav.prefs.svelte";

import NavPrefs from "./page/prefs.nav.svelte";
import ToolsPrefs from "./page/prefs.tools.svelte";
import TextPrefs from "./page/prefs.text.svelte";
import ColsPrefs from "./page/prefs.cols.svelte";
import A11yPrefs from "./page/prefs.a11y.svelte";

import { popups } from "#modules/stores";

</script>


<div class="popup" on:click={event => event.stopPropagation()}>
  <PrefsNav />

  <div class="prefs">
    <div style:float="right">
      <Click button={() => $popups.prefs.shown = false}>
        X
      </Click>
    </div>

    <div class="content">
      {#if $popups.prefs.page == "nav"}
        <h2> Navigation </h2>
        <NavPrefs />
      {:else if $popups.prefs.page == "tools"}
        <h2> Tools </h2>
        <ToolsPrefs />
      {:else if $popups.prefs.page == "text"}
        <h2> Text </h2>
        <TextPrefs />
      {:else if $popups.prefs.page == "cols"}
        <h2> Colours </h2>
        <ColsPrefs />
      {:else if $popups.prefs.page == "a11y"}
        <h2> Accessibility </h2>
        <A11yPrefs />
      {:else}
        <!-- empty -->
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

  background-color: var(--col-back);
  border-radius: 1rem;
}

.prefs {
  width: 100%;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: scroll;
}

.content {
  padding: 0.5rem 2rem;
  color: var(--col-text);
  text-align: left;
}

</style>

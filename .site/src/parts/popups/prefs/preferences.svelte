<!-- @component `Preferences`

The overlay for configuring user preferences.
-->

<script lang="ts">

import { popups } from "#modules/stores";

import Click from "#parts/ext/click.svelte";

import PrefsNav from "./nav.prefs.svelte";
import NavPrefs from "./views/prefs.nav.svelte";
import ToolsPrefs from "./views/prefs.tools.svelte";
import TextPrefs from "./views/prefs.text.svelte";
import ColsPrefs from "./views/prefs.cols.svelte";
import A11yPrefs from "./views/prefs.a11y.svelte";

</script>


<div class="popup" on:click={event => event.stopPropagation()}>
  <PrefsNav />

  <div class="prefs">
    <div style:float="right">
      <Click button={() => $popups.prefs.shown = false}>
        <span class="material-symbols-rounded">
          close
        </span>
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

h2 {
  margin: 0.25em 0 1em;
  @include font-head;
  font-size: 150%;
}


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
  padding: 0.75rem 2rem;
  color: var(--col-text);
  text-align: left;
}

</style>

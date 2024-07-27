<script lang="ts">

import Click from "#parts/ext/click.svelte";

import { prefs, popups } from "#modules/stores";

</script>


<nav>
  <Click kind="trit" button={() => $popups.prefs.shown = true}>
    #
  </Click>

  <Click kind="trit" button={() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }}>
    ^
  </Click>

  <Click kind="trit" button={() => $prefs.tools.shown = false}>
    >
  </Click>
</nav>


<style lang="scss">

nav {
  width: 6rem;
  height: 100vh;
  margin: 0;
  padding: 0.5rem;
  flex-grow: 0;
  background-color: var(--col-back);
  background-color: grey;
}

nav > * {}

</style>

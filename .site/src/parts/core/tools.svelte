<script lang="ts">

import Click from "#parts/ext/click.svelte";

import { popups } from "#modules/stores";

</script>


<nav>
  <Click kind="trit" button={() => popups.update(data => {
    data.prefs.shown = true;
    return data;
  })}>
    #
  </Click>

  <Click kind="trit" button={() => { return }}>
    ^
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

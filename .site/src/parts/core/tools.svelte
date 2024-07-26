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
  width: 3rem;
  padding: 0.5rem;
  background-color: var(--col-back);
}

nav > * {}

</style>

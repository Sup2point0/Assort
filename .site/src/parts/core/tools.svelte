<script lang="ts">

import Click from "#parts/ext/click.svelte";

import { popups } from "#modules/stores";

</script>


<nav>
  <Click kind="trit" action="show" getStore={() => $popups.prefs}>
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

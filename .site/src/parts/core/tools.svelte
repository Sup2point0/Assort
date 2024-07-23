<script lang="ts">

import Click from "#parts/ext/click.svelte";

import { prefs } from "#modules/stores";

</script>


<nav>
  <Click kind="trit" action="open" store={prefs}>
    #
  </Click>

  <Click kind="trit">
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

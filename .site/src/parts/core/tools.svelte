<script lang="ts">

import Click from "#parts/ext/click.svelte";

</script>


<nav>
  <Click button={() => window.scroll = 0}>
    ^
  </Click>
</nav>


<style lang="scss">

nav {
  width: 2rem;
  background-color: white;
}

</style>

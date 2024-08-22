<script>

import PrefsCell from "../parts/prefs.cell.svelte";

import { prefs } from "#modules/stores";

</script>


<PrefsCell name="Show Tools Pane">
  <input type="checkbox" bind:checked={$prefs.tools.shown} />
</PrefsCell>


<style lang="scss">

@use './src/styles/prefs' as *;

</style>

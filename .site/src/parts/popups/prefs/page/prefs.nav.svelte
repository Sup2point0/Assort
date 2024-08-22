<script>

import PrefsCell from "../parts/prefs.cell.svelte";

import { prefs } from "#modules/stores";

</script>


<PrefsCell name="Show Navigation Pane">
  <input type="checkbox" bind:checked={$prefs.nav.shown} />
</PrefsCell>

<PrefsCell name="Immersive View"
  desc="Automatically open pages in immersive view if they support it.">
  <input type="checkbox" bind:checked={$prefs.nav["open-immersive"]} />
</PrefsCell>


<style lang="scss">

@use './src/styles/prefs' as *;

</style>

<script>

import PrefsCell from "../parts/prefs.cell.svelte";

import { prefs } from "#modules/stores";

</script>


<PrefsCell name="Display Results Immediately"
  desc="Immediately update search results as you type a query. (It may help to turn this off for less capable devices.)">
  <input type="checkbox" bind:checked={$prefs.search.immediate} />
</PrefsCell>


<style lang="scss">

@use './src/styles/prefs' as *;

</style>

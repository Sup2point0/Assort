<script>

import PrefsCell from "../parts/prefs.cell.svelte";

import Site from "#src/site";
import { prefs } from "#modules/stores";

</script>


<!-- TODO set fixed intervals? -->
<PrefsCell name="Text Size">
  <input type="range" min=20 max=200 bind:value={$prefs.text.size} />
</PrefsCell>

<!-- FIXME -->
<PrefsCell name="Typeface">
  <select bind:value={$prefs.text.typeface}>
    {#each Site.fonts as font}
      <option>{font}</option>
    {/each}
  </select>
</PrefsCell>


<style lang="scss">

@use './src/styles/prefs' as *;

</style>

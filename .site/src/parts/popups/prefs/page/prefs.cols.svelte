<script>

import PrefsCell from "../parts/prefs.cell.svelte";

import { prefs } from "#modules/stores";

</script>


<PrefsCell name="Colour Theme"
  desc="Enforce a light or dark colour palette. If neither is selected, the page’s default will be used."
/>

<PrefsCell name="Dual Palettes"
  desc="Enable to use different colour palettes for light and dark pages."
>
  <input type="checkbox" bind:checked={$prefs.cols["dual-palettes"]} />
</PrefsCell>

<PrefsCell name="Colour Palette"
  desc="Choose how you want <em>Assort</em> to look!"
/>


<style lang="scss">

@use './src/styles/prefs' as *;

</style>

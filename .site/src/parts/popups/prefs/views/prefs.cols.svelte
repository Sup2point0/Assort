<script>

import Site from "#src/site";

import { prefs } from "#modules/stores";

import PrefsCell from "../parts/prefs.cell.svelte";
import PaletteCard from "../parts/card.palette.svelte";

</script>


<PrefsCell name="Colour Theme"
  desc="Enforce a light or dark colour palette. If neither is selected, the page’s default will be used."
>
  <select bind:value={$prefs.cols.duality}>
    <option value={null}> no preference </option>
    <option>light</option>
    <option>dark</option>
    <option>system</option>
  </select>
</PrefsCell>

<PrefsCell name="Dual Palettes"
  desc="Enable to use different colour palettes for light and dark pages."
>
  <input type="checkbox" bind:checked={$prefs.cols["dual-palettes"]} />
</PrefsCell>

<PrefsCell name="Colour Palette"
  desc="Choose how you want <em>Assort</em> to look!"
/>

<section id="palette-cards">
  <section id="palettes-light">
    {#each Site.palettes.light as palette}
      <PaletteCard palette={palette} />
    {/each}
  </section>
  
  <section id="palettes-dark">
    {#each Site.palettes.dark as palette}
      <PaletteCard palette={palette} />
    {/each}
  </section>
</section>


<style lang="scss">

@use './src/styles/prefs' as *;

</style>

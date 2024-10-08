<!-- @component PaletteCard

A card in the colours view for selecting colour palettes.
-->

<script lang="ts">

import { prefs } from "#modules/stores";

export let palette;
// export let duality: "light" | "dark";

$: selected = ($prefs.cols.palettes[palette.duality] == palette.shard);


function updatePalette() {
  $prefs.cols.palettes[palette.duality] = palette.shard;
}

</script>


<button
  class:selected={selected}
  class={palette.shard}
  on:click={updatePalette}
>
  <div class="palette-preview">
  </div>
  <div class="name-row">
    <h4> {palette.name} </h4>
  </div>
</button>


<style lang="scss">

@use './src/palettes/colours' as *;


button {
  width: 9rem;
  height: 6rem;
  margin: 0.5rem;
  padding: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  background-color: var(--col-back);
  border: none;
  border-radius: 1rem;

  // filter: drop-shadow(0 0 2px var(--col-prot));
  transition-property: outline, filter;
  transition-duration: 0.2s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);

  &.selected:not(:hover) {
    outline: var(--col-prot) solid 2px;
  }

  &:hover {
    outline: var(--col-prot) solid 2px;
    filter: drop-shadow(0 0 4px var(--col-prot));
  }
}

.palette-preview {
  width: 100%;
}

.name-row {
  width: 100%;
  margin: 0;
  padding: 0.5em 1em;
  background-color: var(--col-back-deut);
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  h4 {
    margin: 0;
    @include font-ui;
    color: var(--col-prot);
  }
}

</style>

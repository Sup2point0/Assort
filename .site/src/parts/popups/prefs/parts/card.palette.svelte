<!-- @component PaletteCard

A card in the colours view for selecting colour palettes.
-->

<script lang="ts">

import { prefs } from "#modules/stores";

export let palette;
export let duality: "light" | "dark";

$: selected = ($prefs.cols.palettes[duality] == palette);

</script>


<button class:selected>
  <div class="palette-preview {palette.shard}">
    <h4> {palette.name} </h4>
  </div>
</button>


<style lang="scss">

// button {
//   padding: 0 0 0.5rem;
//   background-color: light-dark(white, black);
//   border-radius: 1rem;
//   @include trans-default;

//   &:hover {
//     outline: rgba(var(--col-accent), 50%) solid 2px;
//   }
// }

// .palette-preview {
//   background-color: var(--col-back);
// }

</style>

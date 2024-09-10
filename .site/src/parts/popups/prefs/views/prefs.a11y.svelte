<script>

import PrefsCell from "../parts/prefs.cell.svelte";

import { prefs } from "#modules/stores";

</script>


<PrefsCell name="Animations"
  desc="Disable to reduce animations."
>
  <input type="checkbox" bind:checked={$prefs.a11y.anim} />
</PrefsCell>

<PrefsCell name="Underline Links">
  <input type="checkbox" bind:checked={$prefs.a11y["underline-links"]} />
</PrefsCell>

<p class="caption"> Accessibility setting missing? Drop an issue on <a href="https://github.com/Sup2point0/Assort">GitHub</a>! </p>


<style lang="scss">

@use './src/styles/prefs' as *;

</style>

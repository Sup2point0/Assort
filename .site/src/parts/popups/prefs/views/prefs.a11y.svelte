<script>

import PrefsCell from "../parts/prefs.cell.svelte";

import { prefs } from "#modules/stores";

</script>


<PrefsCell name="Animations"
  desc="Disable to reduce animations."
>
  <input type="checkbox" bind:checked={$prefs.a11y.anim} />
</PrefsCell>

<PrefsCell name="Underline Links"
  desc="Format links with an underline, even when not hovered over."
>
  <input type="checkbox" bind:checked={$prefs.a11y["underline-links"]} />
</PrefsCell>

<PrefsCell name="Show Visited Links"
  desc="Highlight visited links in a different colour."
>
  <input type="checkbox" bind:checked={$prefs.a11y["visited-links"]} />
</PrefsCell>

<p class="caption"> Accessibility setting missing? Drop an issue on <a href="https://github.com/Sup2point0/Assort">GitHub</a>! </p>


<style lang="scss">

@use './src/styles/prefs' as *;

</style>

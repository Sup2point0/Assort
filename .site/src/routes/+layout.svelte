<script>

import "#styles/essence.scss";

import { prefs } from "#modules/stores";

$: duality = $prefs.cols.duality ?? "light";

</script>


<div
  class={$prefs.cols.palettes[duality]}
  style:color-scheme={duality}
>
  <slot>
    <p class="error"> Uh, something went wrong! </p>
  </slot>
</div>


<style lang="scss">

@use './src/palettes/colours' as *;

</style>

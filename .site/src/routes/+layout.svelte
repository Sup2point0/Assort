<script>

import "#styles/font-faces.scss";
import "#styles/essence.scss";

import { prefs } from "#modules/stores";


$: duality = $prefs.cols.duality ?? "light";

</script>


<div
  id="content"
  class={$prefs.cols.palettes[duality]}
  style:color-scheme={duality}
>
  <slot>
    <p class="error"> Uh, something went wrong! </p>
  </slot>
</div>


<style lang="scss">

@use './src/palettes/colours' as *;


#content {
  background-color: var(--col-back);
}

</style>

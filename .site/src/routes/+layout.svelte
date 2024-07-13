<script>

import "#styles/essence.scss";

import { duality } from "#modules/stores";

</script>


<div class="duality" style:color-scheme={$duality}>
  <slot>
    <p class="error"> Uh, something went wrong! </p>
  </slot>
</div>

<script>

import "#styles/essence.scss";

import duality from "#stores/duality";

</script>


<div class="duality" style:color-scheme={$duality}>
  <slot>
    <p class="error"> Uh, something went wrong! </p>
  </slot>
</div>

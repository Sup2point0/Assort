<script>

import { base } from "$app/paths";

</script>


<div class="assort">
  <img alt="assort" src="{base}/icons/assort.png">
  <p> Assort </p>
</div>


<style lang="scss">

p {
  @include font-ui;
  font-size: 1rem;
}

img {
  height: 2rem;
}

.assort {
  height: 2rem;
  max-height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;

  > * {
    display: inline-block;
  }
}

</style>

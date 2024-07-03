<script>

import { page } from "$app/stores";

</script>


<footer>
  <div class="left">
    <p> LAST EDITED <span class="highlight">{$page.hist.edit}</span> </p>
    <p> LAST DEPLOYED <span class="highlight">{$page.hist.deploy}</span> </p>
  </div>

  <div class="left">
    <p> VIEW ON <a href={$page.source.link}>GITHUB</a> </p>
  </div>
</footer>


<style lang="scss">

p {
  @include font-ui;
  font-size: 80%;
  color: $col-text-deut;
}

footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
}

</style>
    

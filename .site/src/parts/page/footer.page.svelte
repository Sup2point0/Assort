<script>

import { page } from "$app/stores";

</script>


<footer>
  <div class="left">
    <p> LAST EDITED <span class="highlight">{
      $page.data.hist?.edit ?? "?"
    }</span> </p>

    <p> LAST DEPLOYED <span class="highlight">{
      $page.data.hist?.deploy ?? "?"
    }</span> </p>
  </div>

  <div class="right">
    {#if $page.data.path}
      <p> VIEW ON <a href={`https://github.com/Sup2point0/Assort/blob/origin/${page.data.path}`}>GITHUB</a> </p>
    {/if}
  </div>
</footer>


<style lang="scss">

p {
  @include font-ui;
  font-size: 80%;
  color: var(--col-text-deut);
}

footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
}

</style>
    

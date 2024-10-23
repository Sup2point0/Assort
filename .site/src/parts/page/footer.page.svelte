<script>

import { page } from "$app/stores";


const date = $page.data.last_deploy && (
  new Date($page.data.last_deploy)
  .toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
);

</script>


<footer>
  <div class="left">
    <p> LAST DEPLOYED <span class="highlight">{date}</span> </p>
  </div>

  <div class="right">
    {#if $page.data.path}
      <p> VIEW ON <a href="https://github.com/Sup2point0/Assort/blob/origin/{$page.data.path}">GITHUB</a> </p>
    {/if}
  </div>
</footer>


<style lang="scss">

@use './src/styles/links' as *;

footer {
  margin-top: 2rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  border-top: 1px solid var(--col-line);
}

p {
  @include font-ui;
  font-size: 90%;
  color: var(--col-text-deut);
}

</style>
    

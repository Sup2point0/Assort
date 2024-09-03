<script>

import Site from "#src/site";

</script>


<p> Explore all the pages in Assort! </p>

<ul>
  {#each Site.pages as page}
    <li> {page.dest} </li>
  {/each}
</ul>


<style lang="scss">



</style>

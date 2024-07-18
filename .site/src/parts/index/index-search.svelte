<script>

import Search from "#parts/ext/Search.svelte";

import siteData from "#src/site";


let options = new SearchOptions;

$: listedPages = options.apply(siteData.pages);

</script>


<Search bind:options />

<section>
  {#each listedPages as data}
    <SearchResult {...data} />
  {/each}
</section>


<style lang="scss">

section {
  padding-left: 1rem;
}

</style>

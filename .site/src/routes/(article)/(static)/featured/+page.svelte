<script lang="ts">

import Site from "#src/site";

import type { PageData } from "#modules/types";
import SearchOptions from "#modules/types";

import Search from "#parts/ext/Search.svelte";


const featured = Site.featured;
let searchOptions = new SearchOptions();

$: let featuredPages = searchOptions.apply(featured);

</script>


<Search bind:options={searchOptions} />

<ul>
  {#each featuredPages as page}
    <ContentCard
      title={page.title}
      capt={page.capt}
      desc={page.desc}
    />
  {/each}
</ul>


<style lang="scss">

ul {
  display: grid;
}

</style>

<script lang="ts">

import Site from "#src/site";

import type { PageData } from "#modules/types";
import { SearchOptions } from "#modules/types";

import Search from "#parts/ext/search.svelte";
import ContentCard from "#parts/ext/card.content.svelte";


const featured = Site.featured;
let searchOptions = new SearchOptions<PageData>();

$: featuredPages = searchOptions.apply(featured);

</script>


<Search
  bind:options={searchOptions}
  on:message={e => console.log(e.detail)}
/>

<ul>
  {#each featuredPages as page}
    <ContentCard
      title={page.title}
      capt={page.capt}
      intern={page.dest}
    >
      <p> {page.desc} </p>
    </ContentCard>
  {/each}
</ul>


<style lang="scss">

ul {
  margin-top: 2rem;
  padding: 0;
  display: grid;
}

</style>

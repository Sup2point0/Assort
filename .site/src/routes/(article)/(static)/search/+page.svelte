<script lang="ts">

import Site from "#src/site";
  
import type { PageData } from "#modules/types";
import { SearchOptions } from "#src/modules/types";

import Search from "#parts/ext/search.svelte";
import ContentCard from "#parts/ext/card.content.svelte";


const pages = Object.values(Site.pages);

let searchOptions = new SearchOptions<PageData>();

</script>


<Search bind:options={searchOptions} />

<ul>
  {#each searchOptions.apply(pages) as page}
    <ContentCard
      title={page.title ?? "..."}
      capt={page.capt ?? "..."}
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

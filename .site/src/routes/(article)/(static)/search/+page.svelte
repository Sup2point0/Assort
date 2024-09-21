<script lang="ts">

import Site from "#src/site";
  
import { SearchOptions } from "#modules/types";
import type { PageData } from "#modules/types";

import Search from "#parts/ext/search.svelte";
import ContentCard from "#parts/ext/card.content.svelte";

import { page } from "$app/stores";


const pages = Object.values(Site.pages);
const params = $page.url.searchParams;

let searchOptions = new SearchOptions<PageData>({
  queryValue: params.get("query"),
  sortOrder: params.get("order"),
});

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

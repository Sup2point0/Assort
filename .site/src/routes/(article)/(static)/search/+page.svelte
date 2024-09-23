<script lang="ts">

import Site from "#src/site";
  
import { SearchOptions } from "#modules/types";
import type { PageData } from "#modules/types";

import Search from "#parts/ext/search.svelte";
import SearchResults from "#parts/views/search.results.svelte";

import { page } from "$app/stores";


const params = $page.url.searchParams;

let searchOptions = new SearchOptions<PageData>({
  query: params.get("query"),
  queryWith: params.get("in") ? (data => data[params.get("in")!]) : null,
  sortWith: params.get("sort") ? (data => data[params.get("sort")!]) : null,
  sortOrder: params.get("order"),
});

</script>


<Search bind:options={searchOptions} />

<SearchResults pages={Object.values(Site.pages)}
  options={searchOptions}
/>


<style lang="scss">



</style>

<script lang="ts">

import Site from "#src/site";
  
import { SearchOptions } from "#modules/types";
import type { PageData } from "#modules/types";

import Search from "#parts/ext/search.svelte";
import SearchResults from "#parts/views/search.results.svelte";

import { page } from "$app/stores";
import { onMount } from "svelte";


let searchOptions = new SearchOptions<PageData>();
let loaded = false;


onMount(() => {
  let params = $page.url.searchParams;
  let opts = {
    query: params.get("query"),
    queryWith: params.get("in"),
    sortWith: params.get("sort"),
    sortOrder: params.get("order"),
  };

  if (opts.query) {
    searchOptions.query = opts.query;
  }
  if (opts.queryWith) {
    searchOptions.queryWith = (data => data[opts.queryWith]);
  }
  if (opts.sortWith) {
    searchOptions.sortWith = (data => data[opts.sortWith]);
  }
  if (opts.sortOrder) {
    searchOptions.sortOrder = opts.sortOrder;
  }

  loaded = true;
});

</script>


<Search bind:options={searchOptions} />

{#if loaded}
  <SearchResults pages={Object.values(Site.pages)}
    options={searchOptions}
  />
{:else}
  <p> hold tight, loading... </p>
{/if}


<style lang="scss">



</style>

<!-- @component IndexView

Search bar and search results for listing indexed pages in an index page.

-->

<script lang="ts">

import Site from "#src/site";

import { SearchOptions } from "#modules/types";
import type { PageData } from "#modules/types";

import Search from "#parts/ext/search.svelte";
import SearchResults from "#parts/views/search.results.svelte";

import { page } from "$app/stores";


const indexedRoutes = Site.index[$page.data.index[0]].pages;
const indexedPages = indexedRoutes.map(route => Site.pages[route]);
let searchOptions = new SearchOptions<PageData>();

</script>


<Search bind:options={searchOptions} />

<SearchResults pages={indexedPages}
  options={searchOptions}
/>


<style lang="scss">



</style>

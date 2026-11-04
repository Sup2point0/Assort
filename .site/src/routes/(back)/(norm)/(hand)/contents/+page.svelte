<script lang="ts">

import { SearchFilter } from "#scripts/search-filter.svelte.ts";
import SITE from "#src/site";

import { Search, PageRow } from "#parts/ui";


const pages = Object.values(SITE.pages);

let filters = new SearchFilter();

let results = $derived(
		filters.apply(pages)
	?? pages.toSorted((page1, page2) => page1.title?.localeCompare(page2.title) ?? 0)
);

</script>


<p> yooo, thanks for checking out <em>Assort</em>! </p>
<p> Here you’ll find a complete collection of all the pages in <em>Assort</em> (well, those that are on the site at least ;) </p>


<div style:height="3rem"></div>

<Search bind:value={filters.query} />

<div style:height="1rem"></div>

<ol class="results">
	{#each results as page}
		<PageRow {page} />
	{/each}
</ol>


<style lang="scss">

ol {
	list-style: none;

	> :global(*) {
		margin-top: 0.5rem;
	}
}

</style>

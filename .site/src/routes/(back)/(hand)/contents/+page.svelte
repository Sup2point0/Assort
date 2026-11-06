<script lang="ts">

import { SearchFilter } from "#scripts/search-filter.svelte.ts";
import SITE from "#src/site";

import { Search, PageRow } from "#parts/ui";


const pages = Object.values(SITE.pages);

// svelte-ignore non_reactive_update: inner reactivity
let filters = new SearchFilter();

let results = $derived(
	filters.apply(pages)
		?? pages.toSorted((page1, page2) =>
			(page1.title ?? "Untitled").localeCompare(page2.title ?? "Untitled")
				?? 0
		)
);

</script>


<article>
	<p> yooo, thanks for checking out <em>Assort</em>! </p>
	<p> Here you’ll find a complete collection of all the pages in <em>Assort</em> (well, those that are on the site at least ;) </p>
</article>


<div style:height="3rem"></div>

<Search bind:filters />

<div style:height="2rem"></div>

<ol class="results {filters.view}">
	{#each results as page}
		<PageRow {page} />
	{/each}
</ol>

<p class="count">
	{#if filters.query}
		{results.length} result{#if results.length !== 1}s{/if} from
	{/if}
	
	{pages.length} pages
</p>


<style lang="scss">

ol {
	list-style: none;

	&.list {
		display: flex;
		flex-flow: column nowrap;
		gap: 0.5rem;
	}

	&.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;

		@media (min-width: 1441px) {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
}

p.count {
	margin-top: 1rem;
	float: right;
}

</style>

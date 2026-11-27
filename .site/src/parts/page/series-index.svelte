<!-- @component `<SeriesIndex>`

-->

<script lang="ts">

import { SearchFilter } from "#scripts/search-filter.svelte.ts";
import SITE from "#src/site";

import { Search, PageRow } from "#parts/ui";


interface Props {
	series: string
}

let { series }: Props = $props();


// svelte-ignore state_referenced_locally: should never change
const pages = Object.values(SITE.series[series]?.pages)
	.map(path => SITE.pages[path])
	.filter(Boolean);

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


<div style:height="3rem"></div>

<Search bind:filters />

<div style:height="2rem"></div>

<ol class="results {filters.view}">
	{#each pages as page}
		<PageRow {page} />
	{/each}
</ol>


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

</style>

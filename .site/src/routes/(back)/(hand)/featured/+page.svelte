<script lang="ts">

import { SearchFilter } from "#scripts/search-filter.svelte.ts";
import SITE from "#src/site";

import { Search, PageRow } from "#parts/ui";


// svelte-ignore non_reactive_update: inner reactivity
let filters = new SearchFilter();

let featured_pages = $derived(
	Object.values(SITE.pages)
		.filter(page => page.flags.includes("feat"))
);

let results = $derived(
	filters.apply(featured_pages)
		?? featured_pages.toSorted((page1, page2) =>
			(page1.title ?? "Untitled").localeCompare(page2.title ?? "Untitled")
		)
);

</script>


<article>
	<p> hey there, welcome to <em>Assort</em>! </p>
	<p> If you’re unsure where to start, you’ve come to the right place. These are my most fleshed-out and presentable pages for you to enjoy! </p>
</article>


<div style:height="3rem"></div>

<Search bind:filters />

<div style:height="2rem"></div>

<ol class="results {filters.view}">
	{#each results as page}
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

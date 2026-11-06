<script lang="ts">

import { SearchFilter } from "#scripts/search-filter.svelte.ts";
import SITE from "#src/site";

import { Search, PageRow } from "#parts/ui";


// svelte-ignore non_reactive_update: inner reactivity
let filters = new SearchFilter();

const recent_pages =
	Object.values(SITE.pages)
		.filter(page => (page.last_update ?? page.release_date) != undefined)
		.toSorted((page1, page2) =>
			/* NOTE: This is incredibly cursed, but it works because we haven't actually deserialised `last-udpate` and `release-date` into JS `Date` objects */
			(page2.last_update ?? page2.release_date).localeCompare(page1.last_update ?? page1.release_date)
		)
		.slice(0, 16)
;

$inspect(recent_pages)

let results = $derived(
	filters.apply(recent_pages) ?? recent_pages
);

</script>


<article>
	<p> I never stop working on <em>Assort</em>, I just take extended breaks. </p>
	<p> Here you’ll find recently released or updated pages! </p>
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

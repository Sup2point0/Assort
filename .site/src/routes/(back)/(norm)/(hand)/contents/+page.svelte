<script lang="ts">

import SITE from "#src/site";
import type { PageData } from "#scripts/types";

import { Search, PageRow } from "#parts/ui";


let query = $state("");

let results: PageData[] = $derived.by(() => {
	let out = (
		Object.values(SITE.pages)
			.filter(page => page.title?.toLowerCase().includes(query.toLowerCase()))
	);

	return out;
});

</script>


<p> yooo, thanks for checking out <em>Assort</em>! </p>
<p> Here you’ll find a complete collection of all the pages in <em>Assort</em> (well, those that are on the site at least ;) </p>


<div style:height="3rem"></div>

<Search bind:value={query} />

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

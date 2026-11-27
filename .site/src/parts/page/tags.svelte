<!-- @component `<>`

-->

<script lang="ts">

import { SITE, BASE } from "#src/site";
import type { PageData } from "#scripts/types";

import { page as current_page } from "$app/state";


let page = $derived(current_page.data as PageData);

</script>


<div class="tags">
	{#each page.tags ?? [] as tag}
		<a class="tag" href="{BASE}/contents?tag={tag}">
			<span>#</span> {SITE.tags[tag]?.title ?? tag}
		</a>
	{/each}
</div>


<style lang="scss">

.tags {
	margin-top: 3rem;
	width: 85vw;
	margin-left: auto;
	margin-right: auto;

	a {
		margin-right: 0.5rem;
		padding: 0.2rem 0.75rem 0.3rem 0.5rem;
		@include font-ui;
		color: white;
		text-decoration: none;
		@include card("light");

		&:hover, &:focus-visible {
			background: $col-assort;
		}

		&:active {
			filter: brightness(75%);
		}
	}

	span {
		color: $col-assort-light;
	}
}

</style>

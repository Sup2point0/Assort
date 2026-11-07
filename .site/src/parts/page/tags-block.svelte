<!-- @component `<TagsBlock>`

An expanded block containing links to other pages that share a tag with the current page.
-->

<script lang="ts">

import { SITE, BASE } from "#src/site";
import type { PageData } from "#scripts/types";

import { page } from "$app/state";


let data = $derived(page.data as PageData);

</script>


<aside>
	{#if data.release_date_raw}
		<p class="date">
			released on <span>{data.release_date_raw}</span>
		</p>
	{/if}

	<table><tbody>
		{#each data.tags as tag}
			<tr>
				<th>
					{SITE.tags[tag].title}
				</th>
				<td>
					{#each SITE.tags[tag].pages.toSorted() as other_file}
						{@const other_page = SITE.pages[other_file]}

						<a
							class:current={other_page.destination === data.destination}
							href="{BASE}/{other_page.destination}"
						>
							{other_page.title}
						</a>
					{/each}
				</td>
			</tr>
		{/each}
	</tbody></table>
</aside>


<style lang="scss">

aside {
	margin-top: 5rem;
	width: 90vw;
	margin-left: auto;
	margin-right: auto;
	position: relative;
	background: rgb(white, 2%);
	padding: 2rem;
	padding-left: 3rem;
	border-top: 1px solid $col-line;
	border-bottom: 1px solid $col-line;
}

table {
	border-collapse: collapse;
}

th, td {
	padding: 1rem 0;
	color: white;
}

th {
	min-width: max-content;
	padding-right: 2rem;
	@include font-ui;
}

td {
	display: flex;
	flex-flow: row wrap;
	gap: 0.5rem;

	a {
		padding: 0.25rem 0.5rem;
		@include font-ui;
		color: white;
		text-decoration: none;
		@include card("light");

		&.current {
			color: $col-cyan;
		}
	}
}

p.date {
	position: absolute;
	right: 0;
	top: -2rem;
	@include font-ui;
	color: rgb(white, 50%);

	span {
		color: $col-assort-light;
		font-weight: calc($default-font-weight + 100);
	}
}

</style>

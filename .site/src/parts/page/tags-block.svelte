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
	<table><tbody>
		{#each data.tags as tag}
			<tr>
				<th> {tag} </th>
				<td>
					{#each SITE.tags[tag] as other_file}
						{@const other_page = SITE.pages[other_file]}

						<a href="{BASE}/{other_page.destination}">
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
	padding: 2rem 0;
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
	}
}

</style>

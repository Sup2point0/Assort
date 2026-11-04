<!-- @component `<PageRow>`

-->

<script lang="ts">

import { BASE } from "#src/site";
import type { PageData } from "#scripts/types";


interface Props {
  page: PageData
}

let { page }: Props = $props();

</script>


<a href="{BASE}/{page.destination}">
	<div class="left">
		<h3> {page.title} </h3>
		<p> {page.description} </p>
	</div>

	<div class="right">
		{#each page.tags ?? [] as tag}
			<span class="tag"> {tag} </span>
		{/each}
	</div>
</a>


<style lang="scss">

a {
	max-width: 50rem;
	padding: 0.5rem 1rem;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: start;
	gap: 1rem;
	@include card("dark");
	text-decoration: none;
}

.left {
	flex: 2;

	h3 {
		margin: 0;
		@include font-ui;
		color: white;
		font-size: 125%;
	}

	p {
		margin: 0;
		@include font-body;
		color: rgb(white, 40%);
		font-size: 90%;
		text-shadow: none;
	}
}

.right {
	flex: 1;
	display: flex;
	flex-flow: row wrap;
	justify-content: end;
	gap: 0.5rem;

	.tag {
		min-width: max-content;
		padding: 0.2rem 0.75rem 0.3rem;
		@include font-ui;
		color: white;
		font-size: 90%;
		text-decoration: none;
		background: $col-line;
		border-radius: $border-radius;
		transition: all 0.12s ease-out;

		&:hover {
			background: $col-assort;
		}
	}
}

</style>

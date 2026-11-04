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
		{#if page.release_date_raw}
			<p> released <span>{page.release_date_raw}</span> </p>
		{/if}
		{#if page.last_update_raw && page.last_update_raw != page.release_date_raw}
			<p> updated <span>{page.last_update_raw}</span> </p>
		{/if}
	</div>
</a>


<style lang="scss">

a {
	max-width: 40rem;
	padding: 0.5rem 1rem;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: start;
	@include card("dark");
	text-decoration: none;

	p {
		text-shadow: none;
	}
}

.left {
	h3 {
		margin: 0;
		@include font-head;
		font-size: 125%;
	}

	p {
		margin: 0;
		@include font-body;
		color: rgb(white, 40%);
		font-size: 90%;
	}
}

.right {
	min-width: max-content;
	text-align: right;

	p {
		margin: 0;
		@include font-ui;
		color: rgb(white, 50%);
		font-size: 80%;
		box-shadow: none;
		
		span {
			color: white;
		}
	}
}

</style>

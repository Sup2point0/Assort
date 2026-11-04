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
	<h3> {page.title} </h3>
	<p> {page.description} </p>
</a>


<style lang="scss">

a {
	display: block;
	max-width: 40rem;
	padding: 0.5rem 1rem;
	@include card("dark");
	text-decoration: none;

	h3 {
		margin: 0;
		@include font-head;
		font-size: 125%;
	}

	p {
		margin: 0;
		@include font-body;
		color: rgb(white, 50%);
		font-size: 90%;
	}
}

</style>

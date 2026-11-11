<!-- @component `<Breadcrumbs>`

-->

<script lang="ts">

import { BASE } from "#src/site";
import type { route, PageData } from "#scripts/types";

import { AssortIcon } from "#parts/special";

import { page } from "$app/state";


let data = $derived(page.data as PageData);

interface Breadcrumb {
	title: string
	intern: route
}

let breadcrumbs = $derived.by(() => {
	let out: Breadcrumb[] = [];
	let current: route = `${BASE}`;

	let frags = data.destination.split("/");

	for (let frag of frags) {
		current += `/${frag}`;
		out.push({ title: frag, intern: current });
	}

	return out;
});

</script>


<ul class="breadcrumbs">
	<a href="{BASE}/">
		<AssortIcon size={20} colour="#ff0090" />
	</a>

	{#each breadcrumbs as { title, intern }}
		<span class="separator"> › </span>

		<li>
			<a href={intern}>{title}</a>
		</li>
	{/each}
</ul>


<style lang="scss">

ul.breadcrumbs {
	list-style: none;
	display: flex;
	flex-flow: row wrap;

	li {
		@include font-ui;
		
		a {
			@include link;
		}
	}
}

span.separator {
	margin: 0 0.5rem;
	@include font-ui;
	color: rgb(white, 50%);
}

</style>

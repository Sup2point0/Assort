<!-- @component `<Breadcrumbs>`

-->

<script lang="ts">

import { SITE, BASE } from "#src/site";
import type { route } from "#scripts/types";

import { AssortIcon } from "#parts/special";

import type { PageData } from "stranger-quarkdown";


interface Props {
  page: PageData<"long">;
}

let { page }: Props = $props();


interface Breadcrumb {
	title: string
	intern: route
}

let breadcrumbs = $derived.by(() => {
	let out: Breadcrumb[] = [];
	let current: route = `${BASE}`;

	let frags = page.destination.split("/");

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
	margin-bottom: 2rem;
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

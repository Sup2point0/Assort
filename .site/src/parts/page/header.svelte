<!-- @component `<Header>`

The header for a page.
-->

<script lang="ts">

import type { PageData } from "stranger-quarkdown";


interface Props {
	page?: PageData<"long">
	text?: string
}

let { page, text }: Props = $props();

</script>


<header>
	{#if text}
		<h1>
			{@html text}
		</h1>

	{:else if page != undefined}
		<h1>
			{@html page.heading}
		</h1>

		{#if page.caption}
			<p class="caption">
				{@html page.caption}
			</p>
		{/if}

	{:else}
		{@const _ = console.warn("[Assort] `<Header>` received neither raw text nor page data!")}

	{/if}
</header>


<style lang="scss">

header {
	margin-bottom: 4rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid rgb(white, 20%);
}

h1 {
	@include font-head;
	color: white;
	font-weight: 100;
	font-size: 300%;
}

</style>

<!-- @component `<Header>`

The header for a page.
-->

<script lang="ts">

import { BASE } from "#src/site";

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

		{#if page.caption || page.tags?.length}
			<div class="lower">
				{#if page.caption}
					<p class="caption">
						{@html page.caption}
					</p>
				{/if}

				{#if page.tags?.length}
					<div class="tags">
						{#each page.tags as tag}
							<a class="tag" href="{BASE}/portal?tag={tag}">
								{tag}
							</a>
						{/each}
					</div>
				{/if}
			</div>
		{/if}

	{:else}
		{@const _ = console.warn("[Assort] `<Header>` received neither raw text nor page data!")}

	{/if}
</header>


<style lang="scss">

header {
	margin-bottom: 4rem;
	padding-bottom: 0.75rem;
	border-bottom: 1px solid rgb(white, 20%);
}

h1 {
	@include font-head;
	color: white;
	font-weight: 100;
	font-size: 300%;
}

.lower {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;

	p.caption {
		margin-top: 0.5rem;
		@include font-body;
		color: rgb(white, 70%);
		font-size: 125%;
	}

	.tags {
		display: flex;
		flex-flow: row wrap;
		align-items: end;
		gap: 0.5rem;

		.tag {
			padding: 0.2rem 0.75rem 0.3rem;
			@include font-ui;
			color: white;
			text-decoration: none;
			background: rgb(white, 20%);
			border-radius: $border-radius;
			transition: all 0.12s ease-out;

			&:hover {
				background: $col-assort;
			}
		}
	}
}

</style>

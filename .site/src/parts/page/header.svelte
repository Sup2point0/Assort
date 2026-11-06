<!-- @component `<Header>`

The header for a page.
-->

<script lang="ts">

import { BASE } from "#src/site";
import type { PageData } from "#scripts/types";

import { page as current_page } from "$app/state";


interface Props {
	page?: PageData
	text?: string
}

let { page = current_page.data as PageData, text }: Props = $props();

</script>


<header>
	<div class="left">
		<h1>
			{#if text}
				{@html text}
			{:else if page != undefined}
				{@html page.heading}
			{:else}
				{@const _ = console.warn("[Assort] `<Header>` received no heading to render!")}
				Untitled Page
			{/if}
		</h1>

		{#if page?.caption}
			<p class="caption"> {@html page.caption} </p>
		{/if}
	</div>

	{#if page?.tags?.length}
		<div class="right">
			<div class="tags">
				{#each page.tags as tag}
					<a class="tag" href="{BASE}/portal?tag={tag}">
						{tag}
					</a>
				{/each}
			</div>
		</div>
	{/if}
	
	{#if page?.last_update_raw != undefined}
		<p class="date">
			last updated <span>{page.last_update_raw}</span>
		</p>
	{/if}
</header>


<style lang="scss">

header {
	margin-bottom: 4rem;
	position: relative;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: end;
	gap: 1rem;
	padding-bottom: 0.75rem;
	border-bottom: 1px solid $col-line;
}

.left {
	h1 {
		@include font-head;
		color: white;
		font-weight: 100;
		font-size: 300%;
	}

	p.caption {
		margin-top: 0.5rem;
		@include font-body;
		color: rgb(white, 70%);
		font-size: 125%;
	}
}

.right {
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
			background: $col-line;
			border-radius: $border-radius;
			transition: all 0.12s ease-out;

			&:hover {
				background: $col-assort;
			}
		}
	}
}

p.date {
	position: absolute;
	right: 0;
	bottom: -2rem;
	@include font-ui;
	color: rgb(white, 50%);

	span {
		color: $col-assort-light;
		font-weight: calc($default-font-weight + 100);
	}
}

</style>

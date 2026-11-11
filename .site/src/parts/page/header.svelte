<!-- @component `<Header>`

The header for a page, which includes the:

- Breadcrumbs
- Search bar
- Title
-->

<script lang="ts">

import { SITE, BASE } from "#src/site";
import type { PageData } from "#scripts/types";

import { Breadcrumbs } from "#parts/page";

import { page as current_page } from "$app/state";


interface Props {
	page?: PageData
}

let { page = current_page.data as PageData }: Props = $props();

</script>


<header>
	<div class="upper">
		<Breadcrumbs />

		{#if current_page.url.pathname !== `${BASE}/contents`}
			<a class="search" href="{BASE}/contents" title="Search">
				<svg viewBox="0 0 2598 2598" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" overflow="hidden">
					<g><path d="M236.5 1162C236.5 661.354 642.354 255.5 1143 255.5 1643.65 255.5 2049.5 661.354 2049.5 1162 2049.5 1662.65 1643.65 2068.5 1143 2068.5 642.354 2068.5 236.5 1662.65 236.5 1162Z" stroke="currentColor" stroke-width="366.667" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/><path d="M1784.5 1803.5 2362.39 2343.65" stroke="currentColor" stroke-width="366.667" stroke-linecap="round" stroke-miterlimit="8" fill="none" fill-rule="evenodd"/></g>
				</svg>
			</a>
		{/if}
	</div>

	<div class="lower">
		<div class="left">
			<h1>
				{#if page != undefined}
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
						<a class="tag" href="{BASE}/contents?tag={tag}">
							{SITE.tags[tag]?.title ?? tag}
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
	</div>
</header>


<style lang="scss">

header {
	margin-bottom: 4rem;
	position: relative;
	padding-bottom: 0.75rem;
	border-bottom: 1px solid $col-line;
}


.upper {
	margin-bottom: 2rem;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;

	a.search {
		box-sizing: content-box;
		width: 1rem;
		height: 1rem;
		padding: 0.5rem;
		display: block;
		color: #ccc;
		text-decoration: none;
		border-radius: $border-radius;
		transition: #{trans()};

		&:hover, &:focus-visible {
			cursor: pointer;
			color: white;
			background: $col-assort;
		}

		&:active {
			filter: brightness(75%);
		}
	}
}


.lower {
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	align-items: end;
	gap: 1rem;
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

		a.tag {
			padding: 0.2rem 0.75rem 0.3rem;
			@include font-ui;
			color: white;
			text-decoration: none;
			background: $col-line;
			border-radius: $border-radius;
			transition: all 0.12s ease-out;

			&:hover, &:focus-visible {
				background: $col-assort;
			}

			&:active {
				filter: brightness(75%);
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

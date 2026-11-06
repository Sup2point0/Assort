<!-- @component `<NavLink>`

-->

<script lang="ts">

import type { route } from "#scripts/types";
import { BASE } from "#src/site";

import { page } from "$app/state";
import { slide } from "svelte/transition";
import { expoInOut } from "svelte/easing";
import type { Snippet } from "svelte";


interface Props {
  text: string
  intern: route
  hover?: string
  children?: Snippet
  debug?: boolean
}

let { text, intern, hover, children, debug }: Props = $props();


let is_current = $derived(intern !== "" && page.url.pathname === `/${intern}`);
let is_related = $derived(intern !== "" && page.url.pathname.startsWith(`/${intern}`));

</script>


<a
	class:current={is_current}
	class:debug
	href="{BASE}/{intern}"
>
	{@html text}

	{#if hover}
		<p class="hover-text">
			{@html hover}
		</p>
	{/if}
</a>

{#if is_related && children != undefined}
	<div class="dropdown" transition:slide={{ duration: 1000, easing: expoInOut }}>
		{@render children?.()}
	</div>
{/if}


<style lang="scss">

a {
	padding: 0.25rem 0.75rem;
	position: relative;
	@include font-ui;
	color: white;
	text-decoration: none;
	border-radius: $border-radius;
	transition: all 0.12s ease-out;

	.hover-text {
		min-width: max-content;
		padding: 0.25rem 0.5rem;
		position: absolute;
		top: 0;
		left: -0.75rem;

		color: white;
		text-align: right;
		background: rgb(black, 90%);
		border-radius: 0.2rem;
		transform: translateX(-100%);
		visibility: hidden;
		opacity: 0;
		transition: all 0.2s ease-out;
	}

	&:hover, &:focus-visible {
		color: $col-yellow;
		background: rgb(black, 10%);

		.hover-text {
			visibility: visible;
			opacity: 1;
			transition-delay: 0.5s;
		}
	}

	&:active {
		background: rgb(black, 40%);
	}

	&.current {
		color: $col-cyan;
		font-weight: 400;
	}

	&.debug:not(:where(:hover, :focus-visible)) {
		opacity: 0;
	}
}

.dropdown {
	margin-left: 1rem;
	display: flex;
	flex-flow: column nowrap;
}

</style>

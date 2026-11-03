<!-- @component `<NavLink>`

-->

<script lang="ts">

import type { route } from "#scripts/types";
import { BASE } from "#src/site";


interface Props {
  text: string
  intern: route | string
  hover?: string  // TODO
}

let { text, intern, hover }: Props = $props();

</script>


<a
	class:live={false}  // TODO
	href="{BASE}/{intern}"
>
	{@html text}

	{#if hover}
		<p class="hover-text">
			{@html hover}
		</p>
	{/if}
</a>


<style lang="scss">

a {
	padding: 0.25rem 0.75rem;
	position: relative;
	@include font-ui;
	color: white;
	text-decoration: none;
	border-radius: 0.2rem;
	transition: all 0.12s ease-out;

	.hover-text {
		min-width: max-content;
		padding: 0.25rem 0.5rem;
		position: absolute;
		top: 0;
		left: -0.5rem;

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
		background: rgb(black, 9%);

		.hover-text {
			visibility: visible;
			opacity: 1;
			transition-delay: 0.5s;
		}
	}
}

</style>

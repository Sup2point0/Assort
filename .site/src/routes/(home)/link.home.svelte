<!-- @component `<HomeLink>`

A special link on the home page.
-->

<script lang="ts">

import { BASE } from "#src/site.ts";

import { scale } from "svelte/transition";
import { expoOut } from "svelte/easing";


interface Props {
	text: string
	intern: string
	
	/** The angle to offset this link from the page centre. */
	angle: number

	/** How far to offset this link from the page centre, in CSS units. */
	distance: string
}

let { text, intern, angle, distance }: Props = $props();

</script>


<a
	href="{BASE}/{intern}"
	style:--angle="{angle}deg"
	style:--dist={distance}
	transition:scale={{ duration: 2000, easing: expoOut }}
>
	{text}
</a>


<style lang="scss">

a {
	position: fixed;
	top: 50%;
	left: 50%;
	transform:
		translateX(calc(cos(var(--angle)) * var(--dist)))
		translateY(calc(sin(var(--angle)) * var(--dist)))
	;

	padding: 1rem;
	@include font-fun;
	color: white;
	font-size: 200%;
	background: rgb(black, 10%);
	text-decoration: none;
}

</style>

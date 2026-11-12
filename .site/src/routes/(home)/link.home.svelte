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
	index: number
}

let { text, intern, index }: Props = $props();

</script>


<a
	href="{BASE}/{intern}"
	style:--i={index}
	transition:scale={{ duration: 2000, easing: expoOut }}
>
	{text}
</a>


<style lang="scss">

@property --zoom {
	syntax: "<number>";
	inherits: false;
	initial-value: 1;
}

a {
	position: fixed;
	top: 50vh;
	left: 50vw;

	$i: var(--i);
	$z: max(0, calc(var(--zoom) * var(--i) / 100));
	$angle: calc($i * $i * 7deg);
	$dist: calc(20vh + $i * 2vh);
	transform:
		translateX(calc( -50% + cos($angle) * $dist * $z ))
		translateY(calc( -50% - sin($angle) * $dist * $z ))
		// rotateX(calc( sin($angle) * 45deg ))
		// rotateX(calc( -1 * sin($angle) * 30deg ))
		// rotateY(calc( -1 * cos($angle) * 30deg ))
		perspective(100rem)
		scale(calc(2 * $z))
	;

	animation: zoom linear;
	animation-timeline: --home-links;

	@keyframes zoom {
		from { --zoom: 2 }
		to   { --zoom: 50 }
	}

	padding: 0.5rem 1rem;
	@include font-fun;
	color: white;
	font-size: 200%;
	background: rgb(white, 10%);
	text-decoration: none;

	&:hover {
		background: rgb(white, 30%);
	}
}

</style>

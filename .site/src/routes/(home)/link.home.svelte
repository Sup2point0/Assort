<!-- @component `<HomeLink>`

A special link on the home page.
-->

<script lang="ts">

import { BASE } from "#src/site.ts";

import { fade, blur } from "svelte/transition";
import { expoOut } from "svelte/easing";


interface Props {
	text: string
	intern: string
	index: number
}

let { text, intern, index }: Props = $props();

</script>


<div class="link"
>
	<a
	transition:blur|global={{ duration: 2000, easing: expoOut, delay: index * 100 }}
		href="{BASE}/{intern}"
		style:--i={index}
	>
		{text}
	</a>
</div>


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
	$z: max(0, calc(var(--zoom) * $i*$i / 900));
	$angle: calc($i * 137deg - ($z + log(3*$z)) * 3deg);
	$dist: calc(5vh + ($i + log($i)) * 1vh);
	transform:
		translateX(calc( -50% + cos($angle) * $dist * $z ))
		translateY(calc( -50% - sin($angle) * $dist * $z ))
		scale(calc($z))
		rotateX(calc( -1 * sin($angle) * 30deg ))
		rotateY(calc( -1 * cos($angle) * 40deg ))
		perspective(100rem)
	;
	filter: blur(calc($z * 0.25px));

	animation: zoom linear;
	animation-timeline: --home-links;

	@keyframes zoom {
		from { --zoom: 1 }
		to   { --zoom: 100 }
	}

	padding: 0.25rem 1rem 0.2rem;
	@include font-fun;
	color: white;
	font-size: 200%;
	background: rgb(white, 10%);
	text-decoration: none;
	transition: #{trans()};

	&:hover {
		background: rgb(white, 30%);
	}
}

</style>

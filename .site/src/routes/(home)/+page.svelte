<!--
	The home page of Assort!
-->

<script lang="ts">

import { BASE } from "#src/site";

import { onMount } from "svelte";
import { scale, blur, slide } from "svelte/transition";
import { expoInOut, expoOut } from "svelte/easing";


// svelte-ignore non_reactive_update
enum Stage {
	WAITING,
	WELCOME,
	ASSORT,
	DONE,
}

let stage = $state(Stage.WAITING);

onMount(() => {
	stage = Stage.WELCOME;

	let next = setTimeout(() => {
		stage = Stage.ASSORT;
	}, 2000);

	return () => clearTimeout(next);
})

</script>


<img id="back" alt="" src="{BASE}/svelte/cortex.jpg" />

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<main onclick={() => { stage = Stage.DONE; }}>
	{#if stage === Stage.WELCOME}
		<p id="welcome"
			in:scale={{ duration: 2000, start: 0, easing: expoOut, delay: 500 }}
			out:blur={{ duration: 1000 }}
		>
			welcome to
		</p>
	
		{:else if stage === Stage.ASSORT}
		<h1 id="assort"
			in:blur={{ duration: 2000 }}
		>
			Assort
		</h1>

		<p id="assort-desc"
			in:slide={{ duration: 1500, axis: "x", easing: expoOut, delay: 1500 }}
		>
			an assortment of all my creations!
		</p>
	
	{/if}
</main>


<style lang="scss">

img#back {
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
	filter: brightness(84%) blur(10px);
	animation: 20s forwards cubic-bezier(0.19, 1, 0.22, 1) fade-in;  // expo-out

	@keyframes fade-in {
		from { opacity: 0; transform: scale(125%) }
		to   { opacity: 1; transform: scale(175%) }
	}
}


@mixin centre {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
}

main {
	width: 100vw;
	height: 100vh;
	text-align: center;
}

p#welcome {
	@include centre;
	@include font-fun;
	font-size: 5vw;
	color: white;
}

h1#assort {
	@include centre;
	@include font-fun;
	font-size: 20vw;
	font-weight: normal;

	color: transparent;
	background-size: 800% 100%;
	background: linear-gradient(to right in oklch,
		#40f190,
		#40e0ff,
		#4090f1,
		#9090f1,
		#ff0090,
	) 0 0 / 800% 100% no-repeat;
	-webkit-background-clip: text;
	background-clip: text;
	animation: 2s forwards ease-in-out flavour;

	@keyframes flavour {
		from { background-position-x: 0 }
		to   { background-position-x: 100% }
	}
}

p#assort-desc {
	width: max-content;
	white-space: pre;
	@include centre;
	transform: translateX(-50%) translateY(20vh);
	@include font-fun;
	font-size: 2vw;
}

</style>

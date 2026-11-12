<!--
	The home page of Assort!
-->

<script lang="ts">

import HomeLinks from "./links.home.svelte";

import { BASE } from "#src/site";

import { onMount } from "svelte";
import { fade, blur, scale, slide } from "svelte/transition";
import { expoIn, expoOut } from "svelte/easing";


// svelte-ignore non_reactive_update
enum Stage
{
	/** Waiting for the page to mount client-side. */
	WAITING,

	/** Show "welcome to". */
	WELCOME,

	/** Show "Assort". */
	ASSORT,

	/** Animation is finished! */
	DONE,
}

/** Durations of each animatino stage. */
const DURATION: Record<Stage, number> = {
	[Stage.WELCOME]: 2000,
	[Stage.ASSORT]: 4000,
};


/** What stage of the entrance animation are we at? */
let stage = $state(Stage.WAITING);

/** The global timeout for advancing to the next animation stage, used for pre-emptive cancelling. */
let timeout: NodeJS.Timeout;

onMount(() => {
	stage = Stage.WELCOME;

	schedule(Stage.ASSORT, () =>
		schedule(Stage.DONE, () => {})
	);

	return () => clearTimeout(timeout);
})


/** Set the animation stage to `$stage`, after waiting for the previous stage to end.
 * 
 * Then schedule `next`, which should be a recursive call to `schedule()`, or a no-op if this is the last stage to schedule. */
function schedule($stage: Stage, next: () => any)
{
	timeout = setTimeout(
		() => {
			stage = $stage;
			next();
		},
		DURATION[$stage - 1 as Stage]
	);
}

</script>


<img id="back" alt="" src="{BASE}/svelte/cortex.jpg" />

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<main onclick={() => {
	clearTimeout(timeout);
	stage = Stage.DONE;
}}>
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
			out:scale={{ duration: 1500, easing: expoIn }}
		>
			Assort
		</h1>

		<p id="assort-desc"
			in:slide={{ duration: 1500, axis: "x", easing: expoOut, delay: 1000 }}
			out:blur={{ duration: 1500 }}
		>
			an assortment of all my creations!
		</p>

	{:else if stage === Stage.DONE}
		<HomeLinks />
		<div id="vignette" in:fade={{ duration: 1000 }}></div>
	
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
	overflow: hidden;
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
	animation: 2.5s forwards ease-in-out flavour;

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

#vignette {
	pointer-events: none;
	width: 100vw;
	height: 80vw;
	position: fixed;
	left: 50%;
	top: 50%;
	translate: -50% -50%;
	background: radial-gradient(transparent 40%, black);

	@media (max-width: 120vh) {
		height: 100vh;
	}
}

</style>

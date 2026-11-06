<!--
	The layout for most of the pages on the site, which provides the default background.
-->

<script lang="ts">

import { BASE } from "#src/site";

let { children } = $props();

</script>


<img id="back" alt="" src="{BASE}/back/sunset.png" />

{#if children != undefined}
	{@render children()}
{:else}
	<p class="error">
		Something went wrong rendering the page!
	</p>
{/if}


<style lang="scss">

img#back {
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
	transform: scale(150%) scaleY(-1);
	transform-origin: 48% 48%;
	filter: brightness(84%) saturate(120%) blur(60px);
}

</style>

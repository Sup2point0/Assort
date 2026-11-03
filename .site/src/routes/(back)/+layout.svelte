<script lang="ts">

import { Nav, Footer } from "#parts/core";

import { BASE } from "#src/site";


let { children } = $props();

</script>


<img id="back" alt="" src="{BASE}/back/sunset.png" />

<div class="layout">
	<main>
		{#if children != undefined}
			{@render children()}
		{:else}
			<p class="error">
				Something went wrong rendering the page!
			</p>
		{/if}
	</main>

	<Nav />
</div>

<Footer />


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
	filter: brightness(84%) saturate(120%) blur(60px);
}

.layout {
	margin-bottom: 4rem;
	padding: 1rem 2rem;
	display: flex;
	flex-flow: row nowrap;

	main {
		width: 100%;
		margin-left: 2rem;
		margin-right: 4rem;
	}
}

</style>

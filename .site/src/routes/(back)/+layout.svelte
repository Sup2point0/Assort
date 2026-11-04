<script lang="ts">

import { BASE } from "#src/site";

import { Nav, Footer } from "#parts/core";
import { AssortIcon } from "#parts/special";


let { children } = $props();

</script>


<img id="back" alt="" src="{BASE}/back/sunset.png" />

<div class="layout">
	<a class="assort" href="{BASE}/">
		<AssortIcon size={50} colour="white" />
	</a>

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

.layout {
	margin-bottom: 4rem;
	padding: 0 2rem;
	padding-top: 3rem;
	display: flex;
	flex-flow: row nowrap;

	main {
		width: 100%;
		margin-left: 2rem;
		margin-right: 4rem;
	}
}

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

.assort {
	position: absolute;
	top: 2rem;
	left: 50%;
	transform: translateX(-50%);
}

</style>

<script lang="ts">

import { Nav} from "#parts/core";

import { BASE } from "#src/site";


let { children } = $props();

</script>


<img id="back" src="{BASE}/back/sunset.png" />

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
	filter: brightness(90%) saturate(120%) blur(80px);
}

.layout {
	padding: 1rem 1rem;;
	display: flex;
	flex-flow: row nowrap;
}

main {
	width: 100%;
	padding: 0 1rem;
}

</style>

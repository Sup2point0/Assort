<script lang="ts">

import HomeLink from "./link.home.svelte";

import { onMount } from "svelte";


let scroll_container: HTMLElement;

onMount(() => {
	scroll_container.scrollTo({ top: 200 })
})


const links = [
	{ text: "Contents", intern: "contents" },
	{ text: "Featured", intern: "featured" },
	{ text: "Recent",   intern: "recent" },
	
	{ text: "Contents", intern: "contents" },
	{ text: "Featured", intern: "featured" },
	{ text: "Recent",   intern: "recent" },
	{ text: "Contents", intern: "contents" },
	{ text: "Featured", intern: "featured" },
	{ text: "Recent",   intern: "recent" },
	{ text: "Contents", intern: "contents" },
	{ text: "Featured", intern: "featured" },
	{ text: "Recent",   intern: "recent" },
	{ text: "Contents", intern: "contents" },
	{ text: "Featured", intern: "featured" },
	{ text: "Recent",   intern: "recent" },
	{ text: "Contents", intern: "contents" },
	{ text: "Featured", intern: "featured" },
	{ text: "Recent",   intern: "recent" },
	{ text: "Contents", intern: "contents" },
	{ text: "Featured", intern: "featured" },
	{ text: "Recent",   intern: "recent" },
	{ text: "Contents", intern: "contents" },
	{ text: "Featured", intern: "featured" },
	{ text: "Recent",   intern: "recent" },
	{ text: "Contents", intern: "contents" },
	{ text: "Featured", intern: "featured" },
	{ text: "Recent",   intern: "recent" },
	{ text: "Contents", intern: "contents" },
	{ text: "Featured", intern: "featured" },
	{ text: "Recent",   intern: "recent" },
	{ text: "Contents", intern: "contents" },
	{ text: "Featured", intern: "featured" },
	{ text: "Recent",   intern: "recent" },
];

</script>


<div class="links" bind:this={scroll_container}>
	<div class="perspective">
		{#each links as { text, intern }, index}
			<HomeLink {text} {intern} {index} />
		{/each}
	</div>
	
	<div class="scroll-body"></div>
</div>


<style lang="scss">

.links {
	position: relative;
	scroll-timeline: --home-links;
	max-height: 100vh;
	overflow-y: scroll;
	scrollbar-width: none;

	.scroll-body {
		height: 300vh;
	}

	.perspective {
		position: fixed;
		top: 0;
		perspective: 30rem;
	}
}

</style>

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
	
	{ text: "dev",      intern: "dev" },
	{ text: "writing",  intern: "writing" },
	{ text: "poetry",   intern: "poetry" },
	{ text: "lists",    intern: "lists" },
	{ text: "Yu-Gi-Oh", intern: "yugioh" },
	{ text: "affine",   intern: "affine" },

	{ text: "synopsis", intern: "info/synopsis" },
	{ text: "licence", intern: "info/licence" },
	{ text: "FAQ", intern: "info/faq" },
];

const LINKS = [...links, ...links, ...links];

</script>


<div class="links" bind:this={scroll_container}>
	<div class="perspective">
		{#each LINKS as { text, intern }, index}
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

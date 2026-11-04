<!-- @component `<Nav>`

-->

<script lang="ts">

import { BASE } from "#src/site";

import NavLink from "./nav.link.svelte";

</script>


<nav>
	<section id="top">
		<!-- TODO -->
	</section>

	<section>
		<h2> Explore </h2>
		<NavLink text="home" intern="" hover="Where it all begins" />
		<NavLink text="FAQ" intern="info/faq" hover="Fervently Acquired Questions" />
		<NavLink text="featured" intern="featured" hover="Explore my favourite pages" />
		<NavLink text="contents" intern="contents" hover="Explore all the pages" />
	</section>

	<section>
		<h2> Creatives </h2>
		<NavLink text="dev" intern="dev" />
		<NavLink text="writing" intern="writing" />
		<NavLink text="poetry" intern="poetry" />
		<NavLink text="graphics" intern="graphics" />
		<NavLink text="lists" intern="lists" />
	</section>

	<section>
		<h2> Franchises </h2>
		<NavLink text="Yu-Gi-Oh!" intern="yugioh">
			<NavLink text="archetypes" intern="yugioh/archetypes" />
			<NavLink text="decks" intern="yugioh/decks" />
			<NavLink text="cards" intern="yugioh/cards" />
			<NavLink text="lore" intern="yugioh/lore" />
		</NavLink>
	</section>
	
	<section>
		<h2> Meta </h2>
		<NavLink text="synopsis" intern="synopsis" hover="What is Assort?" />
		<NavLink text="decoded" intern="decoded" hover="Lessons and learnings from Assort" />
		<NavLink text="genAI" intern="ai" hover="generative AI statement" />
		<NavLink text="licence" intern="licence" hover="CC BY-SA 4.0" />
		<NavLink text="stats" intern="stats" hover="stats for nerds" />
		<NavLink text="sup" intern="sup" hover="??" />
	</section>
</nav>


<style lang="scss">

nav {
	width: 16vw;
	min-width: 12em;
	max-width: 20em;
	min-height: 80vh;
	max-height: max-content;
	padding: 1rem 0.5rem;
	background: $col-line;
}

section {
	margin-bottom: 1.5rem;
	display: flex;
	flex-flow: column nowrap;

	h2 {
		margin-left: 0.6rem;
		margin-bottom: 0.25rem;
		@include font-head;
		color: $col-yellow;
		font-size: 120%;
		font-weight: 300;
	}
}

</style>

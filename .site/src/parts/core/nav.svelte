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
		<NavLink text="home" intern="{BASE}" hover="Homepage" />
		<NavLink text="home" intern="{BASE}" hover="Homepage" />
		<NavLink text="home" intern="{BASE}" hover="Homepage" />
		<NavLink text="home" intern="{BASE}" hover="Homepage" />
		<NavLink text="home" intern="{BASE}" hover="Homepage" />
	</section>

	<section>
		<h2> Creatives </h2>
		<NavLink text="music" intern="{BASE}" hover="Homepage" />
	</section>
</nav>


<style lang="scss">

nav {
	width: 20vw;
	min-width: 12em;
	max-width: 20em;
	min-height: 80vh;
	max-height: max-content;
	padding: 1rem;
	background: rgb(white, 20%);
}

section {
	margin-bottom: 1rem;
	display: flex;
	flex-flow: column nowrap;

	h2 {
		margin-bottom: 0.5rem;
		@include font-head;
		color: $col-yellow;
		font-size: 120%;
		font-weight: 300;
	}
}

</style>

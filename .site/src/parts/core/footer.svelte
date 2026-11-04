<!-- @component `<Footer>`

-->

<script lang="ts">

import { BASE } from "#src/site.ts";

</script>


<footer>
	<div class="left">
		<h3> an assortment of all my creations! </h3>

		<p> Creative Commons Attribution-ShareAlike </p>
		<p>
			<a href="https://creativecommons.org/licenses/by-sa/4.0">
				CC BY-SA 4.0
			</a>
		</p>
	</div>

	<div class="right">
		<p>
			built with <a target="_blank" href="https://svelte.dev">Svelte 5</a> + <a target="_blank" href="https://svelte.dev/docs/kit">SvelteKit 3</a> + <a target="_blank" href="https://github.com/Sup2point0/stranger-quarkdown">Stranger Quarkdown</a>
		</p>
	</div>
</footer>


<style lang="scss">

footer {
	margin-top: 6rem;
	min-height: 16rem;
	padding: 0 4rem;
	padding-top: 1rem;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	background: colour.change($col-dark, $alpha: 10%);
}

.left {
	@include font-ui;
	color: white;

	h3 {
		margin-bottom: 1rem;
		@include font-fun;
		font-size: 300%;
		font-weight: normal;
	}

	a {
		@include link;
	}
}

.right {
	@include font-ui;
	color: white;

	a {
		@include link;
	}
}

</style>

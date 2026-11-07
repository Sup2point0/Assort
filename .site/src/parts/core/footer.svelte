<!-- @component `<Footer>`

The global page footer.
-->

<script lang="ts">

</script>


<footer>
	<h3> an assortment of all my creations! </h3>

	<section class="core">
		<div class="left">
			<p> Creative Commons Attribution-ShareAlike </p>
			<p>
				<a href="https://creativecommons.org/licenses/by-sa/4.0">
					CC BY-SA 4.0
				</a>
			</p>
		</div>

		<div class="right">
			<p>
				built with <a target="_blank" href="https://svelte.dev">Svelte 5</a> + <a target="_blank" href="https://svelte.dev/docs/kit">SvelteKit 3</a>
			</p>
			<p>
				compiled with <a target="_blank" href="https://github.com/Sup2point0/stranger-quarkdown">Stranger Quarkdown</a>
			</p>
		</div>
	</section>

	<section class="tail">
		<p> <a href="https://sup2point0.github.io">
			made with love by Sup#2.0
		</a> </p>
	</section>
</footer>


<style lang="scss">

p {
	line-height: 1.5;
}


footer {
	margin-top: 6rem;
	min-height: 16rem;
	padding: 2rem 4rem;
	background: colour.change($col-dark, $alpha: 10%);
}

h3 {
	margin-bottom: 1rem;
	@include font-fun;
	font-size: 300%;
	font-weight: normal;
}

section.core {
	padding-bottom: 4rem;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	@include font-ui;
	color: white;

	a {
		@include link;
	}

	.right {
		text-align: right;
	}
}

section.tail {
	text-align: center;

	a {
		@include font-fun;
		color: rgb(white, 50%);
		font-size: 125%;
		text-decoration: none;
		transition: #{trans()};

		&:hover {
			color: white;
		}
	}
}

</style>

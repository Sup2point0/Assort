<script lang="ts">

let { children } = $props();

</script>


<main id="sup">
	{@render children()}
</main>


<style lang="scss" global>

main#sup {
	padding: 5rem 3rem;
	max-width: max(60vw, 32em);
	margin-left: auto;
	margin-right: auto;


	p {
		margin: 1.5em 0;
		color: white;
		font-family: 'Nanum Pen Script';
		font-size: 200%;
		line-height: 1.2;
	}
}

</style>

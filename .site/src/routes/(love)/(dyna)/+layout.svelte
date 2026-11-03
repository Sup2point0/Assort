<script lang="ts">

let { children } = $props();

</script>


<article>
	{#if children != undefined}
		{@render children()}
	{:else}
		<p class="error">
			No page content!
		</p>
	{/if}
</article>

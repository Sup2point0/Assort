<script lang="ts">

import "#styles/markdown.scss";

import { Header } from "#parts/page";

import { page } from "$app/state";
import type { PageData } from "stranger-quarkdown";


let { children } = $props();

let data = $derived(page.data as PageData<"long">);

</script>


<Header page={data} />

<article>
	{#if children != undefined}
		{@render children()}
	{:else}
		<p class="error">
			No page content!
		</p>
	{/if}
</article>


<style lang="scss">

</style>

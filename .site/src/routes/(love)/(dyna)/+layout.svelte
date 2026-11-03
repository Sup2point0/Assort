<script lang="ts">

import "#styles/markdown.scss";

import { Nav} from "#parts/core";
import { Header } from "#parts/page";

import { page } from "$app/state";
import type { PageData } from "stranger-quarkdown";


let { children } = $props();

let data = $derived(page.data as PageData<"long">);

</script>


<div class="layout">
	<main>
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
	</main>

	<Nav />
</div>


<style lang="scss">

.layout {
	padding: 1rem 1rem;;
	display: flex;
	flex-flow: row nowrap;
}

main {
	padding: 0 1rem;
}

</style>

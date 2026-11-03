<!--
The root layout which wraps everything in `<div#root>` for setting global attributes, but does NOT contribute any elements beyond that.
-->

<script lang="ts">

import "#styles/essence.scss";

import { BASE } from "#src/site";

import { page } from "$app/state";

import type { PageData } from "stranger-quarkdown";


let { children } = $props();

let data = $derived(page.data as PageData<"long">);

</script>


<div id="root"
	class={data?.tags}
	style:BASE={BASE}
>
	{#if children != undefined}
		{@render children()}
	{:else}
		<p class="error">
			Something went wrong rendering the page!
		</p>
	{/if}
</div>

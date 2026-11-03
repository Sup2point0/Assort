<!--
	The root layout which wraps everything in `<div#root>` for setting global attributes, but does NOT contribute any elements beyond that.
-->

<script lang="ts">

import "#styles/essence.scss";

import { get_font_for_theme, FONT_BODY, FONT_HEAD } from "./fonts";
import { BASE } from "#src/site";

import { page } from "$app/state";

import type { PageData } from "stranger-quarkdown";


let { children } = $props();

let data = $derived(page.data as PageData<"long">);


let font_body = $derived(get_font_for_theme(FONT_BODY, data.tags));
let font_head = $derived(get_font_for_theme(FONT_HEAD, data.tags));

</script>


<svelte:head>
	<!-- TODO add category -->
	{#if data.title != undefined && data.title !== ""}
		<title> {data.title} · Assort </title>
	{:else}
		<title> Assort · Sup#2.0 </title>
	{/if}
</svelte:head>

<div id="root"
	class={data?.tags}
	style:BASE={BASE}
	style:--font-body={font_body}
	style:--font-head={font_head}
>
	{#if children != undefined}
		{@render children()}
	{:else}
		<p class="error">
			Something went wrong rendering the site!
		</p>
	{/if}
</div>

<script lang="ts">

import { base } from "$app/paths";

import Tag from "#parts/ext/Tag.svelte";

import type { PageData } from "#modules/types/page-data";

export let page: PageData;

</script>


<header>
  <h1> {page.title} </h1>
  {#if page.capt}
    <p id="capt" class="caption"> {page.capt} </p>
  {/if}
  {#if page.date}
    <p id="date" class="caption"> {page.date} </p>
  {/if}

  {#each page.shard as shard}
    <Tag link="{base}/search?shard={shard}">
      {shard}
    </Tag>
  {/each}
</header>


<style lang="scss">

@use '#styles/mixins/decorate' as *;


header {
  width: 100%;
  padding: 0 0 0.5rem;
  @include underline(1.5px);
}

h1 {
  @include font-head;
  font-size: 250%;
  color: $col-text;
}

</style>

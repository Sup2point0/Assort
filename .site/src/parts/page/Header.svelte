<script lang="ts">

import { page } from "$app/stores";

import Tag from "#parts/ext/Tag.svelte";

</script>


<header>
  <h1> {$page.data.title} </h1>
  
  {#if $page.data.capt}
    <p id="capt" class="caption"> {$page.data.capt} </p>
  {/if}

  {#if $page.data.dateDisplay}
    <p id="date" class="caption"> {$page.data.dateDisplay} </p>
  {/if}

  {#each $page.data.shard ?? [] as shard}
    <Tag intern="search?shard={shard}">
      {shard}
    </Tag>
  {/each}
</header>


<style lang="scss">


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

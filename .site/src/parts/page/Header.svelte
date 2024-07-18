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

  <div class="shards">
    {#each $page.data.shard ?? [] as shard}
      <Tag
        intern="search?shard={shard}"
        col="#ff0090"
      >
        {shard}
      </Tag>
    {/each}
  </div>
</header>


<style lang="scss">

header {
  width: 100%;
  padding: 0 0 0.5rem;
  @include line(1.5px);
}

h1 {
  margin: 1rem 0;
  @include font-head;
  font-size: 300%;
  color: $col-text;
}

p#capt {
  margin: 0;
  @include font-head;
  font-weight: 350;
  font-size: 150%;
  color: $col-text-deut;
}

.shards {
  margin: 1rem 0 0;
}

</style>

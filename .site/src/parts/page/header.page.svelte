<script lang="ts">

import { page } from "$app/stores";

import Site from "#src/site";

import Shard from "#parts/ext/tag.shard.svelte";

</script>


<header>
  <div>
    <h1> {$page.data.title} </h1>
    
    {#if $page.data.capt}
      <p id="capt" class="caption"> {$page.data.capt} </p>
    {/if}
  </div>

  <div>
    {#if $page.data.date_display}
      <p id="date" class="caption"> {$page.data.date_display} </p>
    {/if}

    <div id="shards">
      {#each $page.data.shard ?? [] as shard}
        <Shard shard={shard} />
      {/each}
    </div>
  </div>
</header>


<style lang="scss">

header {
  width: 100%;
  padding: 0 0 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
  @include line(1.5px);
}

h1 {
  margin: 1rem 0 0;
  @include font-head;
  font-size: 300%;
  color: var(--col-text);
}

p.caption {
  color: var(--col-text-deut);
}

p#capt {
  margin: 1rem 0 0;
  padding: 0;
  @include font-head;
  font-weight: 350;
  font-size: 150%;
}

#shards {
  max-width: 40vw;
  margin: 1rem 0 0;
}

</style>

<!-- @component SearchResults

-->


<script lang="ts">

import { SearchOptions } from "#modules/types";
import type { PageData } from "#modules/types";

import ContentCard from "#parts/ext/card.content.svelte";
import Shard from "#parts/ext/tag.shard.svelte";

import { page } from "$app/stores";

export let pages: PageData[];
export let options: SearchOptions<PageData>;


</script>


<ul>
  {#each options.apply(pages) as page}
    <ContentCard
      title={page.title ?? "..."}
      capt={page.capt ?? "..."}
      intern={page.dest}
    >
      <p> {page.desc} </p>
      
      {#each page.shard ?? [] as shard}
        <Shard shard={shard} />
      {/each}
    </ContentCard>
  {/each}
</ul>


<style lang="scss">

ul {
  margin-top: 2rem;
  padding: 0;
  display: grid;
}

</style>

<!-- @component Shard

A tag for a shard which links to the relevant search.
-->

<script lang="ts">

import Site from "#src/site";

import Tag from "#parts/ext/tag.svelte";

export let shard: string;


const data = Site.shard[shard] ?? Site.index[shard];

</script>


<Tag
  intern="search?query={shard}&in=shard"
  col={data?.colour}
>
  {data?.display ?? shard}
</Tag>

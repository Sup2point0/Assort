<!-- Squarkdown base for shard collection pages -->

<script>

import site from "#src/site";

import Header from "#src/parts/page/header.page.svelte";
import Search from "#parts/ext/Search.svelte";
import LinkCard from "#src/parts/ext/card.link.svelte";

import { search } from "#modules/stores";


const shard = "%{shard}";
const collection = site.collections[shard];

const page = {
  title: collection.title + " • Collections"
};

const store = $search[shard];
$: filteredPages = store.filtrate(collection.pages);

</script>


<Header {page} />

<Search />

<ul>
  {#each filteredPages as page}
    <LinkCard {...page} />
  {/each}
</ul>

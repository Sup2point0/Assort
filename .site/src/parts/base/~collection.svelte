<!-- Squarkdown base for shard collection pages -->

<script>

import site from "#src/site-config";

import Header from "#parts/page/Header.svelte";
import Search from "#parts/ext/Search.svelte";
import LinkCard from "#parts/ext/LinkCard.svelte";

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

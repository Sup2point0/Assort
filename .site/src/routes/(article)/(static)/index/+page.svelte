<script lang="ts">

import { ratio } from "fuzzball";

import { base } from "$app/paths";
import { onMount } from "svelte";

import Site from "#src/site";

import type { PageData } from "#modules/types";


const pages = Object.values(Site.pages);
let pageSelection = [];

onMount(() => {
  pageSelection = searchFilter(pages);
})


let searchData = {
  query: "",
  field: null,
  reverse: false,
}

function searchFilter(pages: Array<PageData>): Array<PageData> {
  let source = [...pages];

  let querying = (searchData.query && searchData.query);

  // check sufficient relevance first
  if (querying) {
    source = source.filter(
      page => ratio(page.title, searchData.query) > 10
    )
  }

  if (searchData.field) {
    // sort by field relevance
    source.sort((prot, deut) => {
      (deut[field] - prot[field]) * (searchData.reverse ? -1 : 1)
    });
  } else {
    // sort by query relevance
    if (searchData.query && searchData.query != "") {
      source.sort((prot, deut) => (
        (
          (
            ratio(deut.title, searchData.query)
          + (deut.title.toLowerCase().includes(searchData.query.toLowerCase()) ? 100 : 0)
          ) - (
            ratio(prot.title, searchData.query)
          + (prot.title.toLowerCase().includes(searchData.query.toLowerCase()) ? 100 : 0)
          )
        ) * (searchData.reverse ? -1 : 1)
      ));
    }
  }

  return source;
}

</script>


<p> Explore all the pages in Assort! </p>

<div id="search-controls">
  <input id="search-bar" type="search"
    placeholder="Search..."
    bind:value={searchData.query}
  />

  <button id="search-button" on:click={() => {
    pageSelection = searchFilter(pages);
  }}>
    <span class="material-symbols-outlined"> search </span>
  </button>
</div>

<table>
  <tr>
    <th> Page </th>
    <th> Index </th>
    <th> Tags </th>
    <th> Date </th>
    <th> Slocs </th>
    <th> Chars </th>
  </tr>

  {#each pageSelection as page}
    {@const indexed = page.index.map(each => Site.index[each])}
    {@const shards = page.shard.map(each => Site.shard[each])}

    <tr>
      <td>
        <a href={page.dest}> {page.title} </a>
      </td>

      <!-- INDEX -->
      <td>
        {#each indexed as index}
          <!-- very annoying hack here to avoid random spaces being injected -->
          <a href="{base}/{index?.path}">{index?.display ?? "?"}</a
          >{#if index != indexed[indexed.length -1]}
            <span class="divider">/</span>
          {/if}

        {/each}
      </td>

      <!-- SHARD -->
      <td>
        {#each shards as shard}
          <a href="{base}/{shard?.path}">{shard?.display ?? "?"}</a
            >{#if shard != shards[shards.length -1]}
              <span class="divider">/</span>
            {/if}
        {/each}
      </td>

      <!-- DATE -->
      <td class="deut"> {page.date?.substring(0, 4) ?? ""} </td>

      <!-- SLOCS -->
      <td class="trit"> {page.slocs ?? "?"} </td>

      <!-- CHARS -->
      <td class="trit"> {page.chars ?? "?"} </td>
    </tr>
  {/each}

</table>


<style lang="scss">

@use './src/styles/pages/article' as *;


td, th {
  padding: 0.75em 1em;
}

th {
  text-align: left;
}

td {
  &.deut { color: var(--col-text-deut); }
  &.trit { color: var(--col-text-trit); }
}


.divider {
  margin: 0 0.25em;
  color: var(--col-text-trit);
}


#search-controls {
  height: 5rem;
  width: 80%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
}

#search-bar {
  appearance: none;
  width: 75%;
  margin-right: 0.5rem;
  padding: 0.5em 1em;
  
  @include font-ui;
  font-size: 120%;
  background-color: var(--col-back-trit);
  border: 1.5px solid var(--col-line-deut);
  border-radius: 0.5em;

  &:hover, &:click {
    border-color: var(--col-prot);
    outline: rgba(blue, 10%) solid 2px;
  }

  &:focus {
    border-color: var(--col-prot);
    outline: none;
  }
}

#search-button {
  margin: 0;
  padding: 0.5rem 1rem;
  color: white;
  background-color: var(--col-prot);
  border: none;
  border-radius: 0.5rem;

  @include interactive(
    var(--col-deut),
    var(--col-link-click),
  )
}

</style>

<script lang="ts">

import { base } from "$app/paths";
import { page } from "$app/stores";

import type { PageData } from "#modules/types";
import Site from "#src/site";


const index = $page.data.index;

// map each index to list of pages
const collection: Object[] = index.map(
  each => Site.index[each]
);

</script>


<section id="index-view">
  <table>
    <tr>
      <th id="top" colspan="3"> Indexed </th>
    </tr>

    {#each collection as index}
      <tr>
        <th>
          <a href="{base}/{index?.path}"> {index?.display ?? "..."} </a>
        </th>
        <td class="separator"> / </td>

        <td>
          {#each index?.pages ?? [] as page}
            {@const data = Site.pages[page]}
            <a href="{base}/{data.dest}"> {data.title} </a>
          {/each}
        </td>
      </tr>
    {/each}
  </table>
</section>


<style lang="scss">

@use './src/styles/links' as *;


#index-view {
  width: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

table {
  width: 90%;
  @include font-body;
  text-align: left;
  border-collapse: collapse;
}

td, th {
  margin: 0;
  padding: 1em 0.5em;
  @include font-body;
  color: $col-text;
  border-bottom: 1.25px solid $col-line;
}

th {
  min-width: 5rem;
  width: 20%;
  font-weight: 500;
}

td {
  max-width: 100%;

  &.separator {
    width: 0;
    padding-left: 0;
    padding-right: 0;
    color: $col-text-trit;
  }
}

#top {
  padding: 0.25em 0;
  @include font-ui;
  font-size: 125%;
  color: white;
  text-align: center;
  background-color: $col-accent;
  border: none;
}

</style>

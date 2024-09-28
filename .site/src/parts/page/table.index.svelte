<script lang="ts">

import Site from "#src/site";

import { base } from "$app/paths";
import { page } from "$app/stores";


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

        <td class="page-list">
          {#each index?.pages ?? [] as page}
            {@const data = Site.pages[page]}

            <!-- very annoying hack here to avoid random spaces being injected -->
            <a href="{base}/{data.dest}">{data.title}</a
            >{#if page != index.pages[index.pages.length -1]}
              <span class="divider">/</span>
            {/if}

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
  color: var(--col-text);
  border-bottom: 1.25px solid var(--col-line-deut);
}

th {
  width: 0;
  min-width: 5rem;
  padding-right: 5em;
  font-weight: 500;
}

td {
  max-width: 100%;

  &.page-list {
    line-height: 150%;
  }
}


.divider {
  margin: 0 0.5em;
  color: var(--col-text-trit);
}


#top {
  padding: 0.25em 0;
  @include font-ui;
  font-size: 125%;
  color: white;
  text-align: center;
  background-color: var(--col-prot);
  border: none;
}

</style>

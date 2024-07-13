<script lang="ts">

import { base } from "$app/paths";

import siteData from "#src/site-config";

export let index: string[];


const collection: {string: string[]}[] = index.map(
  each => {
    each: siteData.filter(
      page => page.index.include(each)
    )
  }
);

</script>


<table>
  {#each collection as index}
    <tr>
      <th> {index} </th>

      {#each collection[index] as page}
        <td>
          <a href="{base}/{page.dest}"> {page.title} </a>
        </td>
      {/each}
    </tr>
  {/each}
</table>


<style lang="scss">

table {
  width: 100%;
  @include font-body;
  border: 2px solid $col-back-deut;
}

th {
  font-weight: 125%;
}

td {
  padding: 0.2em;
  border: 1px solid rgba($col-back-deut, 42%);
}

</style>

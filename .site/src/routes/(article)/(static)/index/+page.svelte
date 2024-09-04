<script>

import { base } from "$app/paths";

import Site from "#src/site";

$: pages = Object.values(Site.pages);

</script>


<p> Explore all the pages in Assort! </p>

<input id="search-bar" type="search" />

<table>
  <tr>
    <th> Page </th>
    <th> Index </th>
    <th> Tags </th>
    <th> Date </th>
    <th> Slocs </th>
  </tr>

  {#each pages as page}
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
      <td>
        {page.date?.substring(0, 4) ?? ""}
      </td>

      <!-- SLOCS -->
      <td>
        {page.slocs ?? ""}
      </td>
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


.divider {
  margin: 0 0.25em;
  color: var(--col-text-trit);
}


#search-bar {
  margin: 0.5rem 0 2rem;
}

</style>

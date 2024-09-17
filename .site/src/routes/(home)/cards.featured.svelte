<script>

import ContentCard from "#parts/ext/card.content.svelte";

import Site from "#src/site";

import { pick } from "#modules/utils";


const featuredPages = pick(6, Site.featured);

</script>


<section>
  <div>
    {#each featuredPages as page}
      <ContentCard style="--width: 20rem"
        title={page.title ?? "..."}
        capt={page.capt ?? "..."}
        intern={page.dest}
      />
    {/each}
  </div>
</section>


<style lang="scss">

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  div {
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  </style>
  
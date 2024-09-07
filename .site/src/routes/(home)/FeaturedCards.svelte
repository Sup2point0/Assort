<script>

import ContentCard from "#parts/ext/card.content.svelte";

import Site from "#src/site";

import { pick } from "#modules/utils";


const featuredSelection = pick(6, Object.values(Site.pages).filter(page => page.isFeatured));
console.log("featuredSelection", featuredSelection);

</script>


<section>
  <div>
    {#each featuredSelection as article}
      <ContentCard width={20}
        title={article.title}
        text={article.desc ?? "..."}
        intern={article.dest}
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
  
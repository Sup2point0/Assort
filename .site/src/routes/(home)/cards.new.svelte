<script>

import Site from "#src/site";

import { pick } from "#modules/utils";

import ContentCard from "#parts/ext/card.content.svelte";


let pages = (
  [...Object.values(Site.pages)]
  .sort((prot, deut) => {
    return new Date(deut.date) - new Date(prot.date);
  })
  .slice(0, 12)
);

const newSelection = pick(6, pages);

</script>


<section>
  <div>
    {#each newSelection as article}
      <ContentCard style="--width: 20rem"
        title={article.title ?? "..."}
        capt={article.capt ?? "..."}
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
  
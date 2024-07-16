<script>

import ContentCard from "#parts/ext/ContentCard.svelte";

import siteData from "#src/site";

import { pick } from "#modules/utils";


const featuredSelection = pick(6, siteData.pages.filter(page => page.featured));

</script>


{#each featuredSelection as article}
  <ContentCard
    title={article.title}
    text={article.desc}
    intern={article.path}
  />
{/each}

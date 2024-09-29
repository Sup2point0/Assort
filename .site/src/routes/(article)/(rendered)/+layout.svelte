<script>

import Notice from "#parts/page/notice.svelte";
import IndexTable from "#parts/page/table.index.svelte";
import PageFooter from "#parts/page/footer.page.svelte";

import { page } from "$app/stores";


const special = $page.data.flags.includes("index");

</script>


<title>
  {$page.data.title}
</title>

{#if $page.data.flags.includes("dev")}
  <Notice icon="purple-portal.png"
    title="Under development!"
    desc="This article is currently unfinished. If I haven’t modified it in a while, I must’ve forgotten about it!"
  />
{/if}

<slot />

{#if !special}
  <IndexTable />
{/if}

<PageFooter />

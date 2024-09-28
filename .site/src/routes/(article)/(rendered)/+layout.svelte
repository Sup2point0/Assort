<script>

import IndexTable from "#src/parts/page/table.index.svelte";
import PageFooter from "#parts/page/footer.page.svelte";

import { page } from "$app/stores";


const special = $page.data.flags.includes("index");

</script>


<title>
  {$page.data.title}
</title>

<slot />

{#if !special}
  <IndexTable />
{/if}

<PageFooter />

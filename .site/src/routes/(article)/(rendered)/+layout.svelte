<script>

import { page } from "$app/stores";

import IndexTable from "#src/parts/page/table.index.svelte";
import PageFooter from "#parts/page/footer.page.svelte";

</script>


<title>
  {$page.data.title}
</title>

<slot />

<IndexTable />
<PageFooter />

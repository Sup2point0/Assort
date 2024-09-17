<script>

import { page } from "$app/stores";

import IndexView from "#parts/page/view.index.svelte";
import PageFooter from "#parts/page/footer.page.svelte";

</script>


<title>
  {$page.data.title}
</title>

<slot />

<IndexView />
<PageFooter />

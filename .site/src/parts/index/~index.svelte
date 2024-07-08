<!-- @component
Base for an index page.
-->

<script>

import Index from "#parts/page/Index.svelte";

import Content from "./Content.svx";

</script>


<Content>
  <svelte:fragment slot="index">
    <Index />
  </svelte:fragment>
</Content>

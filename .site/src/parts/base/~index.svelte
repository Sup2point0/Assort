<!--
Base for an index page.
-->

<script>

import Content from "./%{file}.svx";

import Search from "../ext/Search.svelte";

</script>


<Content>
  <svelte:fragment slot="index">
    <Search />
  </svelte:fragment>
</Content>

<script lang="ts">

import NavCell from "./nav.cell.svelte";
// import ExportPrefs from "./data.export.svelte";
// import ImportPrefs from "./data.import.svelte";

</script>


<nav>
  <section id="cells">
    <NavCell text="Navigation" set="nav" />
    <NavCell text="Text" set="text" />
    <NavCell text="Colours" set="cols" />
  </section>

  <section id="data">
    <p> Preferences are saved to local storage. </p>
    <!-- <ExportPrefs />
    <ImportPrefs /> -->
  </section>
</nav>


<style lang="scss">

nav {
  max-width: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: start;
  overflow: hidden;
  background-color: green;
}

</style>

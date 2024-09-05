<script lang="ts">

import NavCell from "./parts/nav.prefs.cell.svelte";
// import ExportPrefs from "./data.export.svelte";
// import ImportPrefs from "./data.import.svelte";

</script>


<nav>
  <section id="cells">
    <h2> Preferences </h2>
    <NavCell text="Navigation" set="nav" />
    <NavCell text="Tools" set="tools" />
    <NavCell text="Text" set="text" />
    <NavCell text="Colours" set="cols" />
    <NavCell text="Accessibility" set="a11y" />
  </section>

  <section id="data">
    <p style="font-size: 75%;"> Preferences are saved to local storage. </p>
    <!-- <ExportPrefs />
    <ImportPrefs /> -->
  </section>
</nav>


<style lang="scss">

nav {
  max-width: 50%;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: start;
  overflow: hidden;
  color: var(--col-text);
  text-align: left;
  background-color: var(--col-back-deut);
}

h2 {
  margin: 0;
  padding: 0.5rem 0 1rem 1rem;
  @include font-head;
}

</style>

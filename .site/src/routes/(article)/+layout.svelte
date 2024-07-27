<script>

import { page } from "$app/stores";
import { popups } from "#modules/stores";

import Nav from "#parts/core/nav.svelte";
import Tools from "#parts/core/tools.svelte";
import Footer from "#parts/core/footer.svelte";

import Header from "#parts/page/header.page.svelte";
import IndexView from "#parts/page/view.index.svelte";
import PageFooter from "#parts/page/footer.page.svelte";

import WindowOverlay from "#parts/popups/window-overlay.svelte";
import Preferences from "#parts/popups/prefs/preferences.svelte";

</script>


<div id="page" class:frozen={$popups.prefs.shown}>
  <div id="page-split">
    <Nav />

    <main>
      <Header />

      <slot>
        <p class="error"> Uh, something has gone catastrophically, catastropically wrong! </p>
      </slot>

      <IndexView />
      <!-- <PageFooter /> -->
    </main>

    <Tools />
  </div>

  <Footer />
</div>

{#if $popups.prefs.shown}
  <WindowOverlay exit={() => $popups.prefs.shown = false}>
    <Preferences />
  </WindowOverlay>
{/if}


<style lang="scss">

#page {
  overflow-x: hidden;
}

#page-split {
  width: calc(100vw - 16px);  // SCROLLBAR HIDES CONTENT AHHHH
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: start;
  align-items: stretch;
  overflow-x: hidden; 
}

main {
  padding: 0.5rem 2rem 4rem;
  flex-grow: 2;
  flex-shrink: 1;
  background-color: var(--col-back);
}

.frozen {
  overflow: hidden;
}

</style>

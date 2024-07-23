<script>

import { page } from "$app/stores";

import Nav from "#src/parts/core/nav.svelte";
import Footer from "#src/parts/core/footer.svelte";

import Header from "#src/parts/page/header.page.svelte";
import IndexView from "#parts/page/index.view.svelte";
import PageFooter from "#parts/page/footer.page.svelte";

</script>


<div class="duality">
  <div id="page">
    <div id="nav-page-split">
      <Nav />
      <main>
        <Header />

        <slot>
          <p class="error"> Uh, something has gone catastrophically, catastropically wrong! </p>
        </slot>

        <IndexView />
        <!-- <PageFooter /> -->
      </main>
    </div>
    <Footer />
  </div>
</div>


<style lang="scss">

#page {
  // overflow: scroll;
}

#nav-page-split {
  width: 100%;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: stretch;
}

main {
  width: 100%;
  padding: 0.5rem 2rem 4rem;
  flex-grow: 1;
  flex-shrink: 1;
  overflow-x: scroll;
  overflow-y: hidden;;
  background-color: $col-back;
}

</style>

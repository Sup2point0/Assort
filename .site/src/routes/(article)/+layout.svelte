<script>

import Nav from "#parts/core/Nav.svelte";
import Header from "#src/parts/page/Header.svelte";
import Footer from "#parts/core/Footer.svelte";

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
}

</style>

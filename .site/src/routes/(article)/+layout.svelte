<script>

// import "#styles/essence.scss";

import Nav from "#parts/core/Nav.svelte";
import Footer from "#parts/core/Footer.svelte";

</script>


<div class="duality">
  <div id="page">
    <div id="nav-page-split">
      <Nav />
      <main>
        <slot>
          <p class="error"> Uh, something has gone catastrophicall, catastropically wrong! </p>
        </slot>
      </main>
    </div>
    <Footer />
  </div>
</div>


<style lang="scss">

#nav-page-split {
  width: 100%;
  max-width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
}

main {
  width: 100%;
  height: 100%;
  padding: 0.5rem 2rem 4rem;
  flex-grow: 1;
  flex-shrink: 1;
}

</style>

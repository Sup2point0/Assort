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

main {
  padding: 0.5rem 2rem 4rem;
}

#nav-page-split {
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
}

</style>

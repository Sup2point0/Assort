<script>

// import "#styles/essence.scss";

import Nav from "#parts/core/Nav.svelte";
import Footer from "#parts/core/Footer.svelte";

</script>


<div class="duality">
  <div id="page">
    <div id="nav-page-split">
      <Nav />
      <slot>
        <p class="error"> Uh, something has gone catastrophicall, catastropically wrong! </p>
      </slot>
    </div>
    <Footer />
  </div>
</div>


<style lang="scss">

#nav-page-split {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
}

</style>

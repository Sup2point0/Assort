<script>

// import "#styles/essence.scss";

import Nav from "#parts/core/Nav.svelte";
import Article from "#parts/core/Article.svelte";
import Footer from "#parts/core/Footer.svelte";

</script>


<div class="duality">
  <div id="page">
    <div id="nav-page-split">
      <Nav />
      <Article />
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

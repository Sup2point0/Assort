<script>

import Nav from "#parts/core/nav.svelte";
import Tools from "#parts/core/tools.svelte";
import Footer from "#parts/core/footer.svelte";

import Header from "#parts/page/header.page.svelte";

</script>


<div id="page-split">
  <Nav />

  <main>
    <Header />

    <slot>
      <p class="error"> Uh, something has gone catastrophically, catastropically wrong! </p>
    </slot>
  </main>

  <Tools />
</div>

<Footer />


<style lang="scss">

#page {
  overflow-x: hidden;
}

#page-split {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: start;
  align-items: stretch;
  overflow-x: hidden; 
}

main {
  width: 50%;
  padding: 0.5rem 2rem 4rem;
  flex-grow: 2;
  flex-shrink: 1;
  background-color: var(--col-back);
}

</style>

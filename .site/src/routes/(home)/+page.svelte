<script>

import { onMount } from "svelte";

import { visited } from "#modules/stores";

import Footer from "#parts/core/footer.svelte";

import FlavourStatus from "./flavour-status.svelte";
import QuickLinks from "./quick-links.svelte";
import Welcome from "./assort-welcome.svelte";
import FeaturedCards from "./cards.featured.svelte";
import ExploreCards from "./cards.explore.svelte";
import FranchiseCards from "./cards.franchises.svelte";
import NewlyReleased from "./newly-released.svelte";


onMount(() => {
  if (!$visited) {
    $visited = true;
  }
});

</script>


<svelte:head>
  <title> Assort </title>
</svelte:head>

<main>
  <div class="center">
    <section id="super">
      <p id="assort-welcome"> welcome to </p>
      <h1 id="assort"> ASSORT </h1>
      <p id="assort-capt"> An assortment of all my creations! </p>
    </section>
    
    <QuickLinks />

    <hr>

    {#if $visited}
      <FlavourStatus />
    {:else}
      <section id="welcome">
        <Welcome />
      </section>
    {/if}

    <section id="featured">
      <h2> Featured </h2>
      <FeaturedCards />
    </section>

    <section id="explore">
      <h2> Explore </h2>
      <ExploreCards />
    </section>

    <section id="franchises">
      <h2> Franchises </h2>
      <FranchiseCards />
    </section>

    <section id="releases">
      <h2> Newly Released </h2>
      <NewlyReleased />
    </section>
  </div>
</main>

<Footer />


<style lang="scss">

p {
  margin: 0;
}

h2 {
  width: 100%;
  margin: 0 0 1rem;
  padding: 0 0 0.5rem;

  @include font-head;
  font-size: 200%;
  color: var(--col-text-prot);
  border-bottom: 2px solid var(--col-back-deut);
}


main {
  padding: 0.5rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.center {
  width: 100%;
  max-width: 800px;
  padding: 0.5rem 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

section {
  width: 100%;
  margin-bottom: 2rem;
}


p#assort-welcome {
  @include font-hand;
  font-size: 200%;
  color: var(--col-text-trit);
}
h1#assort {
  @include font-hand;
  margin: -1rem;
  font-size: 1000%;
  color: var(--col-prot);
}
p#assort-capt {
  @include font-hand;
  font-size: 200%;
  color: var(--col-flavour);
}

</style>

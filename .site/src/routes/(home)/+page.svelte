<script>

import Footer from "#parts/core/Footer.svelte";

import FlavourStatus from "./FlavourStatus.svelte";
import QuickLinks from "./QuickLinks.svelte";
import Welcome from "./Welcome.svelte";
import FeaturedCards from "./FeaturedCards.svelte";
import ExploreCards from "./ExploreCards.svelte";
import NewlyReleased from "./ExploreCards.svelte";

</script>


<main>
  <div class="center">
    <FlavourStatus />

    <QuickLinks />

    <section id="super">
      <p id="assort-welcome"> welcome to </p>
      <h1 id="assort"> ASSORT </h1>
      <p id="assort-capt"> An assortment of all my creations! </p>
    </section>

    <hr>

    <section id="welcome">
      <Welcome />
    </section>

    <section id="featured">
      <h2> Featured </h2>
      <!-- <FeaturedCards /> -->
    </section>

    <section id="explore">
      <h2> Explore </h2>
      <ExploreCards />
    </section>

    <section id="releases">
      <h2> Newly Released </h2>
      <NewlyReleased />
    </section>
  </div>
</main>

<Footer />


<style lang="scss">

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h1#assort {
  font-size: 300%;
}

</style>

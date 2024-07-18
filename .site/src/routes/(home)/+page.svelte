<script>

import Footer from "#src/parts/core/footer.svelte";

import FlavourStatus from "./FlavourStatus.svelte";
import QuickLinks from "./QuickLinks.svelte";
import Welcome from "./Welcome.svelte";
import FeaturedCards from "./FeaturedCards.svelte";
import ExploreCards from "./ExploreCards.svelte";
import NewlyReleased from "./ExploreCards.svelte";

</script>


<svelte:head>
  <title> Assort </title>
</svelte:head>

<main>
  <div class="center">
    <FlavourStatus />

    <section id="super">
      <p id="assort-welcome"> welcome to </p>
      <h1 id="assort"> ASSORT </h1>
      <p id="assort-capt"> An assortment of all my creations! </p>
    </section>

    <QuickLinks />

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

p {
  margin: 0;
}

h2 {
  width: 100%;
  margin: 0;
  padding: 0 0 0.5rem;

  @include font-head;
  font-size: 200%;
  color: $col-text-prot;
  border-bottom: 2px solid $col-back-deut;
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
  margin: 1rem 0;
}

p#assort-welcome {
  @include font-hand;
  font-size: 200%;
  color: $col-text-trit;
}
h1#assort {
  @include font-hand;
  margin: -1rem;
  font-size: 1200%;
  color: $blue-nova;
}
p#assort-capt {
  @include font-hand;
  font-size: 250%;
  color: $lilac-nova;
}

</style>

<script>

import { base } from "$app/paths";

import NavLink from "#parts/core/NavLink.svelte";
import NavButton from "#parts/ext/NavButton.svelte";
import Assort from "#parts/misc/Assort.svelte";

import navOpen from "#modules/stores/nav";


function redirectRandomPage() {
  const pages = [
    "sounds",
    "writing",
    "poetry",
    "graphics",
    "affine",
    "kenzokinetics",
    "graphics",
    "yugioh",
  ]

  const random = Math.floor(Math.random() * pages.length);
  window.location.href = `${base}/${pages[random]}`;
}

</script>


{#if $navOpen}
  <nav>
    <section id="top">
      <Assort />
      <NavButton action="close" />
    </section>

    <section>
      <h2> Explore </h2>
        <NavLink text="home" link="{base}" />
        <NavLink text="frequerys" link="{base}/frequerys" />
        <NavLink text="portal" button={redirectRandomPage} />
    </section>

    <section>
      <h2> Categories </h2>
        <NavLink text="music" link="{base}/music" />
        <NavLink text="dev" link="{base}/dev" />
        <NavLink text="writing pieces" link="{base}/writing" />
        <NavLink text="poetry" link="{base}/poetry" />
        <NavLink text="graphic design" link="{base}/graphics" />
        <NavLink text="lists" link="{base}/lists" />
    </section>

    <section>
      <h2> Creations </h2>
        <NavLink text="affine" link="{base}/affine" />
        <NavLink text="Ascense" link="{base}/ascense" />
        <NavLink text="kenzokinetics" link="{base}/kenzokinetics" />
        <NavLink text="xeriqui" link="{base}/xeriqui" />
    </section>

    <section>
      <h2> Franchises </h2>
        <NavLink text="Yu-Gi-Oh!" link="{base}/yugioh" />
    </section>
  </nav>

{:else}
  <NavButton action="open" />

{/if}


<style lang="scss">

nav {
  // --nav-width: max(8rem, 10vw);
  // width: var(--nav-width);
  width: max(12rem, 12vw);
  min-height: 100vh;
  padding: 0.5rem 0.25rem;
  display: inline-block;
  background-color: $col-back-deut;
}

section {
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  &#top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

h2 {
  width: 100;
  margin: 0.75rem 1rem;
  padding: 0 0 0.4em;
  display: block;;

  @include font-ui;
  font-size: 120%;
  font-weight: 420;
  color: $col-text;
  
  border-bottom: 1.5px solid $col-accent;
}

</style>

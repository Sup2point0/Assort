<script>

import { base } from "$app/paths";

import NavLink from "#parts/core/NavLink.svelte";
import NavButton from "#parts/ext/NavButton.svelte";

import navOpen from "#modules/stores/nav";


function redirectRandomPage() {
  const pages = []

  const random = Math.floor(Math.random() * pages.length);
  window.location.href = `${base}/${pages[random]}`;
}

</script>


{#if $navOpen}
  <nav>
    <section id="top">
      <img src="{base}/assort-block.png">
      <NavButton action="close" />
    </section>

    <section>
      <h2> Explore </h2>
        <NavLink text="home" link="https://sup2point0.github.io/Assort" />
        <NavLink text="featured" intern="featured" />
        <NavLink text="index" intern="index" />
        <NavLink text="portal" button={redirectRandomPage} />
      </section>
      
      <section>
        <h2> Categories </h2>
        <NavLink text="music" intern="music">
          <NavLink text="tracks" intern="music/tracks" />
          <NavLink text="albums" intern="music/albums" />
        </NavLink>
        <NavLink text="dev" intern="dev" />
        <NavLink text="writing pieces" intern="writing">
          <NavLink text="creative" intern="writing/creative" />
          <NavLink text="personal" intern="writing/personal" />
          <NavLink text="thoughts" intern="writing/thoughts" />
        </NavLink>
        <NavLink text="poetry" intern="poetry" />
        <NavLink text="graphic design" intern="graphics" />
        <NavLink text="lists" intern="lists" />
      </section>
      
      <section>
        <h2> Creations </h2>
        <NavLink text="affine" intern="affine">
          <NavLink text="affinitys" intern="affine/affinitys" />
          <NavLink text="spells" intern="affine/spells" />
        </NavLink>
        <NavLink text="Ascense" intern="ascense" />
        <NavLink text="kenzokinetics" intern="kenzokinetics" />
        <NavLink text="xeriqui" intern="xeriqui" />
      </section>
      
      <section>
        <h2> Franchises </h2>
        <NavLink text="Yu-Gi-Oh!" intern="yugioh">
          <NavLink text="archetypes" intern="yugioh/archetypes" />
          <NavLink text="cards" intern="yugioh/cards" />
          <NavLink text="lore" intern="yugioh/lore" />
        </NavLink>
        <NavLink text="Ultraman" intern="ultraman" />
      </section>

      <section>
        <h2> Archives </h2>
        <NavLink text="Monkeyopolis Times" intern="monkeyopolis-times">
          <NavLink text="editions" intern="editions" />
          <NavLink text="articles" intern="articles" />
          <NavLink text="ads" intern="ads" />
        </NavLink>
      </section>

      <section>
        <h2> Meta </h2>
        <NavLink text="synopsis" intern="synopsis" />
        <NavLink text="frequerys" intern="frequerys" />
        <NavLink text="AI" intern="ai" />
        <NavLink text="license" intern="license" />
        <NavLink text="sup" intern="sup" />
      </section>
    </nav>
    
{:else}
  <NavButton action="open" />

{/if}


<style lang="scss">

nav {
  width: max(12rem, 12vw);
  height: 100%;
  min-height: 100vh;
  padding: 0.5rem 0.25rem;
  display: block;
  background-color: $col-back-deut;
  resize: horizontal;
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

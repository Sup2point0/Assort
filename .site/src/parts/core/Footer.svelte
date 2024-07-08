<script>

import { base } from "$app/paths";

import GitHubIcon from "#parts/misc/GitHubIcon.svelte";

</script>


<footer>
  <div class="left">
    <section>
      <img id="assort" alt="Assort" src="{base}/assort-block.png">
      <p> An assortment of all my creations! </p>
    </section>

    <section>
      <p> Creative Commons Attribution-ShareAlike </p>
      <p> <a target="_blank" href="~">CC BY-SA 4.0</a> </p>
    </section>

    <section>
      <GitHubIcon />
      <p style:display="inline"> View on <a href="https://github.com/Sup2point0/Assort">GitHub</a> </p>
    </section>
  </div>

  <div class="right">
    <section id="sup">
      <div>
        <p> Made with love by </p>
        <p class="sup"> <a target="_blank" href="https://github.com/Sup2point0">Sup#2.0</a> </p>
      </div>
      <img alt="Purple Portal" src="{base}/.site/purple-portal.png">
    </section>

    <section>
      <p> Built with <a id="svelte" target="_blank" href="https://svelte.dev">Svelte</a>/<a id="svelte-kit" target="_blank" href="https://kit.svelte.dev">Kit</a> </p>
      <p> Preprocessed with <a id="squark" target="_blank" href="https://github.com/Sup2point0/stranger-quarkdown">Squarkdown</a> </p>
      <p> Hosted on <a target="_blank" href="~">GitHub Pages</a> </p>
    </section>
  </div>
</footer>


<style lang="scss">

@use './src/styles/links' as *;

p {
  margin: 0.2rem 0;
  @include font-ui;
  color: $col-text-deut;
}

footer {
  width: 100%;
  margin: 0;
  padding: 2rem 4.2rem 6.9rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  background-color: lightgrey;
  background-color: $col-back-deut;

  .left { text-align: left; }
  .right { text-align: right; }
}

section {
  margin: 0 0 1.5rem;
  padding: 0;
}

a:not(:hover) {
  &#svelte { color: $orange-spirit; }
  &#svelte-kit { color: $red-nova; }
  &#squark { color: $pink-spirit; }
}

#sup {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  .sup {
    @include font-flavour;
    font-size: 150%;
  }

  img {
    margin-left: 1rem;
    height: 4rem;
  }
}

</style>

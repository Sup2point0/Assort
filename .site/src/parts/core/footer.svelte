<script>

import { base } from "$app/paths";

import GitHubIcon from "#parts/misc/github-icon.svelte";

</script>


<footer>
  <div class="left">
    <section id="footer-assort">
      <!-- <img id="assort" alt="Assort" src="{base}/assort-block.png"> -->
      <p> An assortment of all my creations! </p>
    </section>

    <section>
      <p> Creative Commons Attribution-ShareAlike </p>
      <p> <a target="_blank" href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a> </p>
    </section>

    <section>
      <GitHubIcon size={20} />
      <p style:display="inline"> View on <a href="https://github.com/Sup2point0/Assort">GitHub</a> </p>
    </section>
  </div>

  <div class="right">
    <section id="footer-sup">
      <div>
        <p> Made with love by </p>
        <p class="sup"> <a target="_blank" href="https://github.com/Sup2point0">Sup#2.0</a> </p>
      </div>
      <a target="_blank" href="https://github.com/Sup2point0">
        <img alt="Purple Portal" src="{base}/purple-portal.png">
      </a>
    </section>

    <section>
      <p> Built with <a id="svelte" target="_blank" href="https://svelte.dev">Svelte</a>/<a id="svelte-kit" target="_blank" href="https://kit.svelte.dev">Kit</a> </p>
      <p> Rendered with <a id="squarkdown" target="_blank" href="https://github.com/Sup2point0/stranger-quarkdown">Squarkdown</a> + <a id="vividity" target="_blank" href="https://github.com/Sup2point0/vividitu">Vividity</a> </p>
      <p> Hosted on <a target="_blank" href="https://pages.github.com">GitHub Pages</a> </p>
    </section>
  </div>
</footer>


<style lang="scss">

@use './src/styles/links' as *;

p {
  margin: 0.2rem 0;
  @include font-ui;
  color: var(--col-text-deut);
}

footer {
  width: 100%;
  margin: 0;
  padding: 2rem 4rem 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  background-color: lightgrey;
  background-color: var(--col-back-deut);

  .left { text-align: left; }
  .right { text-align: right; }
}

section {
  margin: 0 0 1.5rem;
  padding: 0;
}

a:not(:hover) {
  &#svelte { color: #ff3e00; }
  &#svelte-kit { color: #2d2d3f; }
  &#squarkdown { color: #f190f1; }
  &#vividity { color: #9060f1; }
}


#footer-assort {
  p {
    @include font-hand;
    font-size: 150%;
  }
}

#footer-sup {
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  p {
    @include font-hand;
    font-size: 125%;
  }

  .sup {
    margin-top: -0.2em;
    @include font-hand;
    font-size: 200%;
  }

  img {
    margin-left: 1rem;
    height: 4rem;
  }
}

</style>

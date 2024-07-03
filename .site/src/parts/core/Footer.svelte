<script>

import NavButton from "#parts/ext/NavButton.svelte";
import Assort from "#parts/misc/Assort.svelte";
import GitHubIcon from "#parts/misc/GitHubIcon.svelte";

</script>


<footer>
  <div class="left">
    <section>
      <Assort />
      <p> An assortment of all my creations! </p>
    </section>

    <section>
      <p> Creative Commons Attribution-ShareAlike </p>
      <p> <a target="_blank" href="~">CC BY-SA 4.0</a> </p>
    </section>

    <section>
      <GitHubIcon />
      <p> View on <a href="https://github.com/Sup2point0/Assort">GitHub</a> </p>
    </section>
  </div>

  <div class="right">
    <section id="sup">
      <p> Made with love by </p>
      <p> <a target="_blank" href="https://github.com/Sup2point0">Sup#2.0</a> </p>
    </section>

    <section>
      <p> Built with <a id="svelte" target="_blank" href="https://svelte.dev">Svelte</a>/<a id="svelte-kit" target="_blank" href="https://kit.svelte.dev">Kit</a> </p>
      <p> Preprocessed with <a id="squark" target="_blank" href="https://github.com/Sup2point0/stranger-quarkdown">Squarkdown</a> </p>
      <p> Hosted on <a target="_blank" href="~">GitHub Pages</a> </p>
    </section>
  </div>
</footer>


<style lang="scss">

p {
  @include font-ui;
  color: $col-text-deut;
}

footer {
  width: 100%;
  margin: 0;
  padding: 1rem 2rem 7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  background-color: $col-back-deut;

  .left { text-align: left; }
  .right { text-align: right; }
}

section {
  margin: 0 0 1rem;
  padding: 0;
}

a {
  #svelte { color: $orange-spirit; }
  #svelte-kit { color: $red-nova; }
  #squark { color: $pink-spirit; }
}

#sup {
  @include font-flavour;
  font-size: 200%;
}

</style>

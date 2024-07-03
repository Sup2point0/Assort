<script>

import NavButton from "#parts/ext/NavButton.svelte";
import Assort from "#parts/misc/Assort.svelte";
import GitHubIcon from "#parts/misc/GitHubIcon.svelte";

</script>


<footer>
  <NavButton action="top" />

  <section>
    <Assort />
    <p> An assortment of all my creations! </p>
  </section>

  <section>
    <p> Made with love </p>
    <p> by <a target="_blank" href="https://github.com/Sup2point0">Sup#2.0</a> </p>
  </section>

  <section id="final">
    <p> Creative Commons Attribution-ShareAlike </p>
    <p> <a target="_blank" href="~">CC BY-SA 4.0</a> </p>
    <GitHubIcon />
  </section>
</footer>

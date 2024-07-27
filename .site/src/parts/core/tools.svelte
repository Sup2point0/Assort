<script lang="ts">

import Click from "#parts/ext/click.svelte";

import { prefs, popups } from "#modules/stores";


function scrollUp() {
  document.body.scrollTop += -document.body.scrollTop / 4;
  document.documentElement.scrollTop += -document.documentElement.scrollTop / 4;
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    window.requestAnimationFrame(scrollUp);
  }
}

function scrollTop() {
  window.requestAnimationFrame(scrollUp);
}

</script>


{#if $prefs.tools.shown}
  <nav>
    <section>
      <Click kind="trit" button={() => $popups.prefs.shown = true}>
        #
      </Click>
    </section>

    <section>
      <Click kind="trit" button={scrollTop}>
        ^
      </Click>

      <Click kind="trit" button={() => $prefs.tools.shown = false}>
        <span class="material-symbols-outlined">
          keyboard_double_arrow_right
        </span>
      </Click>
    </section>
  </nav>

{:else}
  <Click kind="trit" button={() => $prefs.tools.shown = true}>
    <span class="material-symbols-outlined">
      keyboard_double_arrow_left
    </span>
  </Click>

{/if}


<style lang="scss">

nav {
  width: 6rem;
  height: 100vh;
  margin: 0;
  padding: 0.5rem;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 0;
  background-color: var(--col-back);
  background-color: grey;
}

section {}

</style>

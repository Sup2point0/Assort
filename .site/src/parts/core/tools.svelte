<script lang="ts">

import Click from "#parts/ext/click.svelte";

import { prefs, popups } from "#modules/stores";

</script>


<div
  id="tool-pane"
  class:shown={$prefs.tools.shown}
>
  <nav class:shown={$prefs.tools.shown}>
    <section style="top: 0">
      <Click kind="trit" button={() => $popups.prefs.shown = true}>
        #
      </Click>
    </section>

    <section style="bottom: 0">
      <Click kind="trit" button={() => window.scrollTo({top: 0, behavior: "smooth"})}>
        ^
      </Click>

      <Click kind="trit" button={() => $prefs.tools.shown = false}>
        <span class="material-symbols-outlined">
          keyboard_double_arrow_right
        </span>
      </Click>
    </section>
  </nav>
</div>

<div
  id="show-tool-pane"
  class:shown={!$prefs.tools.shown}
>
  <Click kind="trit" button={() => $prefs.tools.shown = true}>
    <span class="material-symbols-outlined">
      keyboard_double_arrow_left
    </span>
  </Click>
</div>


<style lang="scss">

$tool-pane-width: 3rem;

@mixin trans {
  transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
}


#tool-pane, nav {
  width: 0;
  &.shown { width: $tool-pane-width; }
  height: 100vh;
  margin: 0;
  padding: 0;
  flex-grow: 0;
  background-color: var(--col-back);
  background-color: grey;
  @include trans;
}

nav {
  position: fixed;
  top: 0;
  right: -$tool-pane-width;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.shown {
    right: 0;
  }
}

section {
  margin: 0;
  padding: 0.5rem;
}

#show-tool-pane {
  position: fixed;
  right: -$tool-pane-width;
  bottom: 0;
  @include trans;

  &.shown {
    right: 0;
  }
}

</style>

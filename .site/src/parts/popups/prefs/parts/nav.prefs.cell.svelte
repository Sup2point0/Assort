<!-- @component NavCell

A cell in the preferences nav pane for switching between pages.
-->

<script lang="ts">

import { popups } from "#modules/stores";

export let text: string;
export let set: string;

</script>


<button
  on:click={() => $popups.prefs.page = set}
  class:live={$popups.prefs.page == set}
>
  {text}
</button>


<style lang="scss">

button {
  width: 100%;
  margin: 0.1rem 0;
  padding: 0.4rem 0 0.4rem 1rem;

  @include font-ui;
  font-weight: 360;
  font-size: 100%;
  color: var(--col-text);
  text-align: left;
  background: none;
  border: none;
  border-radius: 0.5rem;

  @include interactive(
    var(--col-back-deut),
    var(--col-back-deut)
  );

  &.live {
    color: var(--col-deut);
  }
}

</style>

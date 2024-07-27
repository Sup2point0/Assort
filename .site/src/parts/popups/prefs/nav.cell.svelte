<!-- @component NavCell

A cell in the preferences nav pane for switching between pages.
-->

<script lang="ts">

import { popups } from "#modules/stores";

export let text: string;
export let set: string;

</script>


<button on:click={() => $popups.prefs.page = set}>
  {text}
</button>


<style lang="scss">

button {
  background: none;
  border: none;

  @include interactive;
}

</style>

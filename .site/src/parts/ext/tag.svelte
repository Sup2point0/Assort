<script lang="ts">

import { base } from "$app/paths";
import type { MouseEventHandler } from "svelte/elements";

export let intern: string | undefined = undefined;
export let button: MouseEventHandler<HTMLElement> | undefined = undefined;
export let col: string | undefined = "var(--col-back-deut)";

</script>


{#if intern}
  <a class="tag" style:--col={col}
    href="{base}/{intern}"
  >
    <slot />
  </a>

{:else if button}
  <button class="tag" style:--col={col}
    on:click={button}
  >
    <slot />
  </button>

{:else}
  <div class="tag" style:--col={col}>
    <slot />
  </div>

{/if}


<style lang="scss">

.tag {
  margin: 0 0.25em;
  padding: 0.4em 0.5em;

  @include font-ui;
  color: white;
  text-decoration: none;
  background-color: var(--col);
  border-radius: 0.5em;

  @include interactive(var(--col-prot), var(--col-deut));
}

</style>

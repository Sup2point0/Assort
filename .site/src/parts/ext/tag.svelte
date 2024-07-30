<script lang="ts">

import { base } from "$app/paths";
import type { MouseEventHandler } from "svelte/elements";

export let intern: string | undefined = undefined;
export let button: MouseEventHandler<HTMLElement> | undefined = undefined;
export let col: string | string[] | undefined = undefined;


const colour = "#" + col;

</script>


{#if intern}
  <a class="tag" style:--col={colour}
    href="{base}/{intern}"
  >
    <slot />
  </a>

{:else if button}
  <button class="tag" style:--col={colour}
    on:click={button}
  >
    <slot />
  </button>

{:else}
  <div class="tag" style:--col={colour}>
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
}

</style>

<script lang="ts">

import { base } from "$app/paths";

export let intern: string | undefined = undefined;
export let button: CallableFunction | undefined = undefined;
export let col: string = "col-accent";

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
  margin: 0;
  padding: 0.1rem 0.4rem;
  background-color: rgba(var(--col, $col-accent), 20%);

  @include interactive(
    var(--col, $col-accent),
    (42%, 69%, 88%)
  )
}

</style>

<script lang="ts">
  
import type { MouseEventHandler } from "svelte/elements";
import { base } from "$app/paths";

export let kind: "prot" | "deut" | "trit" = "prot";
export let link: string | undefined = undefined;
  export let intern: string | undefined = undefined;
export let button: MouseEventHandler<HTMLElement> | undefined = undefined;
export let action: "open" | "close" | "change" | undefined = undefined;
  export let store: any = undefined;


let callback: MouseEventHandler<HTMLElement>;

if (action) {
  switch (action) {
    case "open":
      callback = () => store?.update(data => data.open());
    case "close":
      callback = () => store?.update(data => data.close());
    case "change":
      callback = () => store?.update(data => data.change());
  }
} else if (button) {
  callback = button;
} else {
  callback = () => { return };
}

</script>


{#if link || intern}
  <a href={link || `${base}/${intern}`}>
    <slot />
  </a>

{:else}
  <button class={kind} on:click={callback}>
    <slot />
  </button>

  {/if}


<style lang="scss">

a, button {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  @include interactive;

  &:hover {
    background-color: grey;
  }
}

.prot {
  background-color: $col-accent;
}
.deut {
  background-color: $col-back-deut;
}
.trit {
  background: none;
  border-radius: 100%;
}

</style>

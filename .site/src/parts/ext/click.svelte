<script lang="ts">
  
import type { MouseEventHandler } from "svelte/elements";
import { base } from "$app/paths";

export let kind: "prot" | "deut" | "trit" = "prot";
export let link: string | undefined = undefined;
  export let intern: string | undefined = undefined;
export let button: MouseEventHandler<HTMLElement> | undefined = undefined;
export let action: "show" | "hide" | "change" | undefined = undefined;
  export let store: any = undefined;


let callback: MouseEventHandler<HTMLElement>;

if (action) {
  switch (action.toLowerCase()) {
    case "show":
      callback = () => store.update(data => {
        data.shown = true;
        return data;
      });
      break;
    case "hide":
      callback = () => store.update(data => {
        data.shown = false;
        return data;
      });
      break;
    case "change":
      callback = () => store.update(data => {
        data.shown = !data.shown;
        return data;
      });
      break;
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

@use 'sass:color';


a, button {
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
}

.prot {
  background-color: var(--col-prot);

  @include interactive(
    var(--col-deut),
    var(--col-deut)
  );
}

.deut {
  background-color: var(--col-back-deut);

  @include interactive(
    var(--col-back-deut),
    var(--col-back-deut)
  );
}

.trit {
  background: none;
  border-radius: 100%;

  @include interactive(var(--col-hover), var(--col-click));
}

</style>

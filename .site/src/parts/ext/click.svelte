<script lang="ts">
  
import type { MouseEventHandler } from "svelte/elements";

export let kind: "prot" | "deut" | "trit" = "prot";
export let link: string | undefined = undefined;
  export let intern: string | undefined = undefined;
export let button: CallableFunction | undefined = undefined;
export let action: "open" | "close" | "switch" | undefined = undefined;
  export let store: any = undefined;


let callback: MouseEventHandler<HTMLElement>;

if (action) {
  switch (action) {
    case "open":
      callback = () => store?.update(data => data.open());
    case "close":
      callback = () => store?.update(data => data.close());
    case "switch":
      callback = () => store?.update(data => data.switch());
  }
}

</script>


<button class={kind} on:click={callback}>
  <slot />
</button>


<style lang="scss">

button {
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

</style>

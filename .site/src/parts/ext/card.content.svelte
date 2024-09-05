<script lang="ts">

import { base } from "$app/paths";

export let title: string;
  export let col: string | undefined = undefined;
export let capt: string | undefined = undefined;
export let text: string = "";
export let link: string | null = null;
  export let intern: string | null = null;
  export let extern: string | null = null;

export let width: number | undefined = undefined;
export let right: boolean = false;

</script>


{#if extern}
  <a
    class="no-link-style"
    class:right
    href={link}
    target="_blank"
    style:--width="{width}rem"
  >
    <h4 style:--col={col}> {title} </h4>
    {#if capt}
      <p class="caption"> {capt} </p>
    {/if}
    <p> {@html text} </p>
  </a>

{:else}
  <a
    class="no-link-style"
    class:right
    href="{intern ? base + "/" : ""}{intern ?? link}"
    style:--width="{width}rem"
  >
    <h4 style:--col={col}> {title} </h4>
    {#if capt}
      <p class="caption"> {capt} </p>
    {/if}
    <p> {@html text} </p>
  </a>

{/if}


<style lang="scss">

a {
  width: var(--width, auto);
  min-width: 4rem;
  margin: 0.25rem;
  padding: 0.5rem 1rem 1rem;
  display: inline-block;
  flex-shrink: 0;

  text-align: left;
  text-decoration: none;
  &.right { text-align: right; }
  background-color: var(--col-card);
  border-radius: 1rem;

  @include interactive(var(--col-card-hover), var(--col-card-click));
  @include focus-outline;
}

h4 {
  margin: 0 0 0.5em;
  @include font-ui;
  font-size: 125%;
  color: var(--col-link);
}

p {
  margin: 0;
  @include font-body;
  font-size: 100%;
}

</style>

<!-- @component
An individual link in the navigation pane.
-->

<script lang="ts">

import { base } from "$app/paths";

export let text: string;
export let link: string | null = null;
  export let intern: string | null = null;
  export let extern: string | null = null;
export let button = null;

</script>


{#if intern}
  <a href="{base}/{intern}"> {text} </a>

{:else if link}
  <a href={link}> {text} </a>

{:else if extern}
  <a href={link} target="_blank"> {text} </a>

{:else if button}
  <button on:click={button}> {text} </button>

{:else}
  <a href=""> {text} </a>

{/if}


<style lang="scss">

a, button {
  width: 100%;
  margin: 0;
  padding: 0.25em 0 0.25em 1em;
  
  @include font-ui;
  font-weight: 360;
  font-size: 100%;
  color: $col-text-deut;
  text-align: left;

  background-color: transparent;
  border-radius: 0.5rem;
  @include trans-default;

  &:hover {
    background-color: light-dark(
      rgba(black, 8%),
      rgba(white, 10%),
    );

    &, &:focus {
      color: $pink-elec;
    }
  }

  &:focus:not(:active) {
    outline: 1.5px solid rgba($blue-sky, 69%);
  }

  &:active {
    color: light-dark($purp-nova, $teal-elec);
    background-color: light-dark(
      rgba(black, 12%),
      rgba(white, 20%),
    );
  }
}

a {
  text-decoration: none;

  &[href$="sup"] {
    color: $col-back-deut;
  }
}

button {
  border: none;
}

</style>

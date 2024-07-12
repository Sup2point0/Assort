<!-- @component
An individual link in the navigation pane.
-->

<script lang="ts">

import { base } from "$app/paths";

export let text: string;
export let link: string | undefined = undefined;
  export let intern: string | undefined = undefined;
  export let extern: string | undefined = undefined;
export let button = undefined;
export let hover: string | undefined = undefined;

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

{#if hover}
  <div class="hover">
    <p> {hover} </p>
  </div>
{/if}


<style lang="scss">

@use 'sass:color';


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

.hover {
  display: none;
  background-color: light-dark(
    rgba(#000, 20%),
    rgba(#fff, 50%)
  );

  p {
    @include font-ui;
    color: white;
  }
}

</style>

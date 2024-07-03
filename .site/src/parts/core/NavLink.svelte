<!-- @component
An individual link in the navigation pane.
-->

<script>

export let text;
export let link = null;
export let extern = null;
export let button = null;

</script>


{#if link}
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
  @include font-ui;
  width: calc(var(--nav-width) - 0.4em);
  margin: 0;
  padding: 0.2em 0 0.2em 1em;
  font-weight: 400;
  font-size: 100%;
  color: $col-text-deut;
  text-align: left;
  background-color: transparent;
  border-radius: 0.5rem;
  @include trans-default;

  &:hover, &:focus {
    color: $pink-elec;
    background-color: light-dark(
      rgba(black, 10%),
      rgba(white, 10%),
    );
  }

  &:focus {
    outline: 2px solid rgba($pink-elec, 69%);
  }

  &:active {
    color: light-dark($purp-nova, $teal-elec);
    background-color: light-dark(
      rgba(black, 20%),
      rgba(white, 20%),
    );
  }
}

a {
  text-decoration: none;
}

button {
  border: none;
}

</style>

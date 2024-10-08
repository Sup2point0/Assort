<!-- @component `Search`

A search input bar and button.
-->

<script lang="ts">

import { createEventDispatcher } from "svelte";

import { SearchOptions } from "#modules/types";
import type { PageData } from "#modules/types";

export let options: SearchOptions<PageData> = new SearchOptions();
export let placeholder: string = "Search";


const dispatch = createEventDispatcher();

</script>


<search style={$$restProps.style}>
  <form on:submit|preventDefault={() => dispatch("search", { query: options.query })}>
    <input type="search"
      {placeholder}
      bind:value={options.query}
    />

    <button type="submit">
      <span class="material-symbols-rounded">
        search
      </span>
    </button>
  </form>
</search>


<style lang="scss">

search {
  width: 100%;
}

form {
  width: 100%;
  height: 3rem;
  min-width: 20rem;
  max-width: 80rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  color: red;
}

input {
  appearance: none;
  width: 100%;
  height: 100%;
  margin: 0 0.5rem 0 0;
  padding-left: 1em;
  
  @include font-ui;
  font-size: 120%;
  background-color: var(--col-back-trit);
  border: 1.5px solid var(--col-line-deut);
  border-radius: 0.5em;

  &:hover, &:click {
    border-color: var(--col-prot);
    outline: rgba(blue, 10%) solid 2px;
  }

  &:focus {
    border-color: var(--col-prot);
    outline: none;
  }
}

button {
  height: 100%;
  margin: 0;
  padding: 0.5rem 1rem;
  color: white;
  background-color: var(--col-prot);
  border: none;
  border-radius: 0.5rem;

  @include interactive(
    var(--col-deut),
    var(--col-link-click),
  )
}

</style>

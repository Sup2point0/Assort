<!-- @component `Search`

A search input bar and button.
-->

<script lang="ts">

import { createEventDispatcher } from "svelte";

import { SearchOptions } from "#modules/types";

export let options: SearchOptions = new SearchOptions();


const dispatch = createEventDispatcher();

</script>


<search>
  <input type="search"
    placeholder="Search"
    bind:value={options.queryValue}
  />

  <button on:click={() => dispatch("search")}>
    <span class="material-symbols-outlined">
      search
    </span>
  </button>
</search>


<style lang="scss">

search {

}

input {
  appearance: none;
  margin-right: 0.5rem;
  padding: 0.5em 1em;
  
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

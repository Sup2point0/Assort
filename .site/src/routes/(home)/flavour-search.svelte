<script>

import { flavourStatus } from "#modules/utils";

import Search from "#parts/ext/search.svelte";

import { base } from "$app/paths";
import { onMount } from "svelte";


let status = "";

onMount(() => {
  status = flavourStatus();
});

</script>


<Search style="max-width: 40rem"
  on:search={e => {
    window.location.href = `${base}/search?query=${e.detail.query}`;
  }}
/>

<p> {status} </p>


<style lang="scss">

p {
  margin: 0 1.5em;
  @include font-hand;
  color: var(--col-prot);
  font-size: 80%;
  text-align: center;
  filter: drop-shadow(0 2px 3px rgba(black, 20%));
}

</style>

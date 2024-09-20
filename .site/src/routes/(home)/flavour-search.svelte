<script>

import { base } from "$app/paths";

import { flavourStatus } from "#modules/utils";

import Search from "#parts/ext/search.svelte";

</script>


<Search
  on:search={e => {
    window.location.href = `${base}/search?query=${e.detail.queryValue}`;
  }}
/>

<p class="flavour-status">
  {flavourStatus()}
</p>


<style lang="scss">

.flavour-status {
  // min-width: 20rem;
  // margin: 1rem 0 3rem;
  // padding: 0.5rem 0;
  text-align: center;
  filter: drop-shadow(0 2px 3px rgba(black, 20%))
}

p {
  margin: 0 1.5em;
  @include font-hand;
  color: var(--col-prot);
  font-size: 80%;
}

</style>

<!-- @component Notice

A notice block at the start of a page.
-->

<script lang="ts">

import { base } from "$app/paths";

export let title: string;
export let desc: string | undefined = undefined;
export let icon: string | undefined = undefined;

</script>


<div class="notice">
  {#if icon}
    <img alt={title} src="{base}/{icon}">
  {/if}

  <div class="text">
    <h4> {title} </h4>
    <p> {desc} </p>
  </div>
</div>


<style lang="scss">

.notice {
  margin: 1rem 0.5rem;
  padding: 1rem 1rem;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color: var(--col-back-prot);
}

img {
  max-height: 4em;
}

.text {
  padding-left: 1rem;
}

h4 {
  margin: 0 0 0.5em;
  @include font-ui;
  font-size: 120%;
}

p {
  margin: 0;
  @include font-body;
  font-size: 100%;
  color: var(--col-text-deut);
}

</style>

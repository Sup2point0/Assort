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

  <div>
    <h4> {title} </h4>
    <p> {desc} </p>
  </div>
</div>


<style lang="scss">

.notice {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  background-color: var(--col-back-deut);
}

img {
  max-height: 4em;
}

h4 {
  @include font-ui;
  font-size: 120%;
}

p {
  @include font-body;
  font-size: 100%;
  color: var(--col-text-deut);
}

</style>

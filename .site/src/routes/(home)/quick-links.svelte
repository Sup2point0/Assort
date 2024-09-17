<script>

import { base } from "$app/paths";

import { portal } from "#modules/utils";

</script>


<nav>
  <a href="{base}/synopsis"> synopsis </a>
  <a href="{base}/frequerys"> frequerys </a>
  <a href="{base}/contents"> contents </a>
  <button on:click={() => { window.location.href = portal(); }}> portal </button>
</nav>


<style lang="scss">

nav {
  margin: 0.5rem;
}

a, button {
  margin: 0;
  padding: 0.5em 0.75em;

  @include font-ui;
  font-size: 100%;
  color: var(--col-link);
  background-color: transparent;
  text-decoration: none;
  border: none;

  @include focus-outline;

  @include interactive(
    var(--col-hover),
    var(--col-click),
  );
}

</style>

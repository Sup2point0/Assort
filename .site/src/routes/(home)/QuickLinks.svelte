<script>

import { base } from "$app/paths";

</script>


<nav>
  <a href="{base}/frequerys"> frequeries </a>
  <a href="{base}/portal"> portal </a>
</nav>


<style lang="scss">

nav {
  margin: 1rem;
}

a {
  margin: 0;
  padding: 0.25em 0.5em;

  @include font-ui;
  color: $col-link;
  background-color: transparent;
  text-decoration: none;
  @include trans-default;

  &:hover {
    background-color: $col-back-deut;
  }
}

</style>

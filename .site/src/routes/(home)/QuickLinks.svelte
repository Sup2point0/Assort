<script>

import { base } from "$app/paths";

</script>


<nav>
  <a href="{base}/frequerys"> frequeries </a>
  <a href="{base}/portal"> portal </a>
</nav>


<style lang="scss">

a {
  margin: 0 0.5rem;
  padding: 0.25em 0.5em;

  background-color: transparent;
  text-decoration: none;
  @include trans-default;

  &:hover {
    background-color: $col-back-deut;
  }
}

</style>

<script>

import { base } from "$app/paths";

</script>


<nav>
  <a href="{base}/synopsis"> synopsis </a>
  <a href="{base}/frequerys"> frequerys </a>
  <a href="{base}/index"> index </a>
  <!-- <a href="{base}/portal"> portal </a> -->
</nav>


<style lang="scss">

nav {
  margin: 0.5rem;
}

a {
  margin: 0;
  padding: 0.5em 0.75em;

  @include font-ui;
  color: var(--col-link);
  background-color: transparent;
  text-decoration: none;

  @include interactive(
    var(--col-hover),
    var(--col-click),
  );
}

</style>

<script>

import "#styles/essence.scss";

import Content from "./~content.svx";

</script>


<main>
  <div id="gg">
    <Content />
  </div>

  <hr>

  <a id="footnote" href="https://sup2point0.github.io/Assort">
    Head back to Assort!
  </a>
</main>


<style lang="scss">

@use './src/styles/links' as *;


main {
  margin: 0;
  padding: 2rem 2rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;;
  background-color: black;
}

#gg {
  width: 80%;
  max-width: 600px;
}

hr {
  width: 80%;
  margin: 2rem 0 1rem;
}

#footnote:not(:hover, :active) {
  color: #40f190;
}

</style>

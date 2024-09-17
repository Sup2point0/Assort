<!-- @component FranchiseCards -->

<script>

import ContentCard from "#parts/ext/card.content.svelte";

</script>


<section>
  <div>
    <ContentCard style="--width: 20rem"
      title="Antarctica"
      capt="a fictional reimagining of the coolest place in the world"
      link="https://sup2point0.github.io/Antarctica"
    />
    <ContentCard style="--width: 20rem"
      title="Yu-Gi-Oh!"
      capt="a card game I never quite fell out of love with"
      intern="yugioh"
    />
    <ContentCard style="--width: 20rem"
      title="affine"
      capt="magic, the way I envision it"
      intern="affine"
    />
    <ContentCard style="--width: 20rem"
      title="xeriqui"
      capt="a theory of existence in my dreams"
      intern="xeriqui"
    />
  </div>
</section>


<style lang="scss">

section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

div {
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

</style>

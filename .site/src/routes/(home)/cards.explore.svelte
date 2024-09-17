<!-- @component ExploreCards -->

<script>

import ContentCard from "#parts/ext/card.content.svelte";

</script>


<section>
  <div>
    <ContentCard style="--width: 20rem"
      title="dev"
      capt="adventures in software development"
      intern="dev"
    />
    <ContentCard style="--width: 20rem"
      title="writing"
      capt="writing from throughout my life"
      intern="writing"
    />
    <ContentCard style="--width: 20rem"
      title="music"
      capt="vibing in GarageBand for iPadOS"
      intern="music"
    />
    <ContentCard style="--width: 20rem"
      title="graphic design"
      capt="pushing the limits of graphic design in PowerPoint"
      intern="graphics"
    />
    <ContentCard style="--width: 20rem"
      title="poetry"
      capt="yeah, I write poetry too."
      intern="poetry"
    />
    <ContentCard style="--width: 20rem"
      title="lists"
      capt="just lists, lists of everything"
      intern="lists"
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

<script>

import ContentCard from "#parts/ext/card.content.svelte";

</script>


<section>
  <div>
    <ContentCard style="--width: 20rem"
      title="music"
      capt="Adventures in software development"
      intern="dev"
    />
    <ContentCard style="--width: 20rem"
      title="dev"
      capt="adventures in software development"
      intern="dev"
    />
    <ContentCard style="--width: 20rem"
      title="writing"
      capt="writing of all sorts"
      intern="dev"
    />
    <ContentCard style="--width: 20rem"
      title="poetry"
      capt="overly melodramatic poetic waffle"
      intern="dev"
    />
    <ContentCard style="--width: 20rem"
      title="graphic design"
      capt="freshly made in PowerPoint 2016!"
      intern="dev"
    />
    <ContentCard style="--width: 20rem"
      title="lists"
      capt="lists of everything"
      intern="dev"
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

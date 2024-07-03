<script>

import { base } from "$app/paths";

import NavLink from "#parts/core/NavLink.svelte";
import NavButton from "#parts/ext/NavButton.svelte";
import Assort from "#parts/misc/Assort.svelte";

import navOpen from "#modules/stores/nav";


function redirectRandomPage() {
  const pages = [
    "sounds",
    "writing",
    "poetry",
    "graphics",
    "affine",
    "kenzokinetics",
    "graphics",
    "yugioh",
  ]

  const random = Math.floor(Math.random() * pages.length);
  window.location.href = `${base}/${pages[random]}`;
}
  
  
const struct = [
  {
    title: "Explore",
    links: [
      { text: "Home",
        link: "${base}" },
      { text: "Frequerys",
        link: "${base}/frequerys" },
      { text: "Portal",
        button: redirectRandomPage },
    ]
  }, {
    title: "Categories",
    links: [
      { text: "music",
        link: "${base}/sounds" },
      { text: "writing pieces",
        link: "${base}/writing" },
      { text: "poetry",
        link: "${base}/poetry" },
      { text: "graphic design",
        link: "${base}/graphics" },
    ]
  }, {
    title: "Creations",
    links: [
      { text: "affine",
        link: "${base}/affine" },
      { text: "kenzokinetics",
        link: "${base}/kenzokinetics" },
      { text: "graphics",
        link: "${base}/graphics" },
    ]
  }, {
    title: "Franchises",
    links: [
      { text: "Yu-Gi-Oh!",
        link: "${base}/yugioh" },
    ]
  }
]

</script>


{#if $navOpen}
  <nav>
    <section>
      <Assort />
      <NavButton action="close" />
    </section>

    {#each struct as sec}
      <section>
        {#each sec.links as link}
          <NavLink {...link} />
        {/each}
      </section>
    {/each}
  </nav>

{:else}
  <NavButton action="open" />

{/if}

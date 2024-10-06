<!-- @component

A row in a preferences page.
-->

<script lang="ts">

export let name: string;
export let desc: string | undefined = undefined;

</script>


<section>
  <header>
    <h4> {name} </h4>
    {#if desc}
      <p class="caption"> {@html desc} </p>
    {/if}
  </header>

  <slot />
</section>


<style lang="scss">

section {
  width: 100%;
  margin: 0;
  padding: 0.75rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

header {
  margin: 0;
  padding: 0 1rem 0 0;
}

h4 {
  margin: 0;
  padding: 0;
  @include font-body;
  font-weight: 500;
}

p {
  @include font-body;
  font-size: 80%;
  font-weight: 400;
  color: var(--col-text-deut);
}

</style>


<!-- @component Notice -->

<script lang="ts">

import Click from "#parts/ext/click.svelte";

export let title: string | undefined = undefined;
export let pict: string | undefined = undefined;
export let store;

</script>


<div class="popup notice">
  <Click kind="trit" button={() => { store = true; }}>
    <span class="material-icons-rounded">
      close
    </span>
  </Click>

  <div class="struct">
    {#if pict}
      <img alt={title} src={pict} />
    {/if}

    <div>
      {#if title}
        <h4> {title} </h4>
      {/if}
      
      <p>
        <slot />
      </p>
    </div>
  </div>
</div>


<style lang="scss">

.notice {
  min-width: 8rem;
  min-height: 5rem;
  background-color: var(--col-prot);
  border-radius: 0.5rem;
  filter: drop-shadow(0 0 4px light-dark(black, white));
}

.struct {
  display: flex;
}

h4 {
  @include font-ui;
  font-size: 120%;
  font-weight: 500;
}

p {
  @include font-ui;
  font-size: 100%;
  font-weight: 400;
}

</style>

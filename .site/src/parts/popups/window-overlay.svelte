<!-- @component `WindowOverlay`

A blurred overlay across the entire screen for displaying modals or warnings over.
-->

<script lang="ts">

export let store: any | undefined = undefined;
export let exit: any | undefined = undefined;


const callback = exit ?? (() => store.exit());

</script>

<!-- TODO add keypress handler -->
<div class="overlay" role="dialog"
  on:click={callback}
  on:keydown={event => event.key == "Escape" && callback(event)}
>
  <slot>
    <p> Uh, something went wrong! Click anywhere to exit... </p>
  </slot>
</div>


<style lang="scss">

.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgba(black, 20%);
  backdrop-filter: blur(4px);
}

</style>

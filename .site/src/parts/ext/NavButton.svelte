<script lang="ts">

import navOpen from "#modules/stores/nav";

export let action: "open" | "close" | "top";


const callbacks = {
  open: () => navOpen.set(val => true),
}

const icons = {
  open: "keyboard_double_arrow_right",
  close: "keyboard_double_arrow_left",
}

</script>


<button on:click={callbacks[action]}>
  <span class="material-symbols-outlined">
    {icons[action]}
  </span>
</button>


<style lang="scss">

button {
  width: 2rem;
  height: 2rem;
  background-color: none;
}

</style>

<script lang="ts">

import nav from "#modules/stores/nav";

export let action: "open" | "close" | "top";


const callbacks = {
  open: () => nav.update(data => {data.open = true; return data}),
  close: () => nav.update(data => {data.open = false; return data}),
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
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  @include interactive;

  // &:hover {
  //   background-color: grey;
  // }
}

</style>

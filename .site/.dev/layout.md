# Svelte Component Layout

```svelte
<!-- @component ComponentName

Description
-->

<script lang="ts">

import ... from "...";

export let ...


const ...

let ...

$: ...


function {
  ...
}


onMount(
  ...
);

</script>


<Component />


<style lang="scss">

div {
  ...
}

</style>
```

- Ofc, we use `;` because we are civilised beings
- Flat `<script>` and `<style>` blocks (I think it looks cleaner)
- Double line breaks between JS, HTML, CSS blocks
- Double line breaks in the JS block between imports/exports, functions, and other code
  - Imports/exports and function definitions tends to be quite bulky so separating from the rest is helpful

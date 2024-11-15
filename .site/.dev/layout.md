# Layouts

Standardising layouts throughout the project!


<br>


## Svelte Component

```svelte
<!-- @component ComponentName

Description.
-->

<script lang="ts">

import ... from "..."

export let ...


const ...

let ...

$: ...


function {
  ...
}


onMount(() => {
  ...
});

</script>


<Component />


<style lang="scss">

div {
  ...
}

</style>
```

- ofc, we use `;` because we are civilised beings
- flat `<script>` and `<style>` blocks (I think it looks cleaner)
- double line breaks between JS, HTML, CSS blocks
- double line breaks in the JS block between imports/exports, functions, and other code
  - imports/exports and function definitions tends to be quite bulky so separating from the rest is helpful


<br>


## JavaScript Imports

```js
import { Module } from "external";
import "style.scss";

import Site from "#src/site";

import { Module } from "#modules/";
import type { Type } from "#modules/types";

import GenericPart from "#parts/";

import SpecialPart from "part.svelte";

import { base } from "$app/paths";
import { page } from "$app/stores";
import { onMount } from "svelte";
```

- overall order of stylesheets / modules / components
  - stylesheets are very rarely imported, so we want to make sure it’s immediately noticeable if they are
  - modules show a component’s dependencies
  - components come and go, so lower down is fine
  - inbuilt Svelte modules can go right at the end since most pages will use them anyway

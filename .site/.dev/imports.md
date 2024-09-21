# JavaScript Import Order

```js
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

- Order goes stylesheets / modules / components
  - Stylesheets are very rarely imported, so we want to make sure it’s immediately noticeable if they are
  - Modules show a component’s dependencies
  - Components come and go, so lower down is fine
  - Inbuilt modules can go right at the end since most pages will use them anyway

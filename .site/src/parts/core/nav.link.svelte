<!-- @component `<NavLink>`

-->

<script lang="ts">

import type { route } from "#scripts/types";
import { BASE } from "#src/site";


interface Props {
  text: string
  intern: route | string
  hover: string  // TODO
}

let { text, intern, hover }: Props = $props();

</script>


<a
	class:live={false}  // TODO
	href="{BASE}/{intern}"
>
	{@html text}
</a>


<style lang="scss">

a {
	padding: 0.25rem 0.75rem;
	@include font-ui;
	color: white;
	text-decoration: none;
	transition: all 0.12s ease-out;

	&:hover, &:focus-visible {
		color: $col-yellow;
		background: rgb(black, 9%);
	}
}

</style>

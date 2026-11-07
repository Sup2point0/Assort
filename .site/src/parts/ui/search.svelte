<!-- @component `<Search>`

-->

<script lang="ts">

import { FrozenWeightedList } from "@sup2.0/weighted-list";

import type { SearchFilter } from "#scripts/search-filter.svelte.ts";

import { onMount } from "svelte";


interface Props {
  filters: SearchFilter
  placeholder?: string
}

let { filters = $bindable(), placeholder = "Search" }: Props = $props();


let self: HTMLInputElement;

const PLACEHOLDERS = new FrozenWeightedList(
	[20, "Search"],
	[5,  "Where to today?"],
	[5,  "Where to next?"],
	[1,  "Deeper into the wormhole we go..."],
);

onMount(() => {
	placeholder = PLACEHOLDERS.sample_value() ?? "Search";
	self?.focus();
})

</script>


<search>
	<input type="search"
		bind:this={self}
		bind:value={filters.query}
		{placeholder}
	/>

	<button class:current={filters.view === "list"} onclick={() => filters.view = "list"}> List </button>
	<button class:current={filters.view === "grid"} onclick={() => filters.view = "grid"}> Grid </button>
</search>


<style lang="scss">

search {
	display: flex;
	flex-flow: row nowrap;
	align-items: stretch;
	gap: 0.5rem;
}

input[type='search'] {
	appearance: none;
	width: 60vw;
	min-width: 30rem;
	max-width: 80rem;
	padding: 0.5rem 1rem;

	@include font-body;
	color: white;
	font-size: 100%;
	background: rgb(white, 20%);
	border: none;
	border-radius: $border-radius;
	outline: none;
	transition: all 0.16s ease-out;

	&::placeholder {
		color: rgb(white, 50%);
		transition: all 0.16s ease-out;
	}

	&:hover, &:focus-visible {
		background: rgb(white, 30%);
	}
	&:hover::placeholder {
		color: rgb(white, 80%);
	}

	&::-webkit-search-cancel-button {
		display: none;
	}
}

button {
	padding: 0.5rem 1rem;
	@include font-ui;
	color: white;
	@include card("light");
	border: none;

	&.current {
		background: rgb(white, 40%);
	}

	&:hover, &:focus-visible {
		cursor: pointer;
	}
}

</style>

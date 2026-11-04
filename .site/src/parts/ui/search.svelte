<!-- @component `<Search>`

-->

<script lang="ts">

import { FrozenWeightedList } from "@sup2.0/weighted-list";

import { onMount } from "svelte";


interface Props {
  value: string
  placeholder?: string
}

let { value = $bindable(), placeholder = "Search" }: Props = $props();


onMount(() => {
	
})

</script>


<search>
	<input type="search"
		bind:value
		{placeholder}
	/>
</search>


<style lang="scss">

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

</style>

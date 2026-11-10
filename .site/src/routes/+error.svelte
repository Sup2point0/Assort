<script lang="ts">

import { BASE } from "#src/site";

</script>


<img id="back" alt="" src="{BASE}/svelte/sunset.png" />

<main>
	<p id="e404"> 404 </p>

	<div>
		<h1> sup, intrepid adventurer. </h1>
		<p> It appears you’ve fallen out of the wormhole. </p>
	</div>
</main>


<style lang="scss">

main {
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	h1 {
		@include font-fun;
		color: white;
		font-size: 400%;
		font-weight: normal;
	}

	p {
		margin-top: 3rem;
		@include font-ui;
		color: #ff0040;
		font-size: 150%;
	}

	p#e404 {
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-60%);
		@include font-ui;
		color: black;
		font-size: 4000%;
		font-weight: 900;
		animation: 4s alternate infinite cubic-bezier(0.445, 0.05, 0.55, 0.95) pulse;  // ease-in-out-sine

		@keyframes pulse {
			from { opacity: 0.01 }
			to   { opacity: 0.2 }
		}
	}
}

img#back {
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -1;
	transform: scale(150%);
	transform-origin: 48% 90%;
	animation: 20s forwards cubic-bezier(0.445, 0.05, 0.55, 0.95) fade;  // ease-in-out-sine

	@keyframes fade {
		from { filter: brightness(64%) saturate(120%) blur(4px); }
		to   { filter: brightness(10%) saturate(60%) blur(16px); transform: scale(250%); }
	}
}

</style>

<script>

let first;// = localStorage.get("assort.init");

let visited = false
if (first) {
  visited = (Date.now() - first > 20);
}

</script>


{#if visited}
  <h3> Welcome back! </h3>

{:else}
  <h3> New here? </h3>
  <p> Feel free to take a look around! </p>
  <p> If you’re unsure where to start, here’s some cool stuff you can check out first below... </p>

{/if}


<style lang="scss">

h3 {
  @include font-head;
}

p {
  @include font-body;
  text-align: left;
}

</style>

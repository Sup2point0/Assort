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
  <section id="welcome-new">
    <h3> New here? </h3>
    <p> This is <em>Assort</em>, my own ...wiki, pretty much. At heart, it’s a massive repository on <a>GitHub</a>, and you’re looking at its website version. Feel free to take a look around, and explore whatever you find intriguing! Here you’ll find all my interests, thoughts, writing, time-wasting, and maybe secrets... </p>

    <p> If you’re unsure where to start, here’s some cool stuff to check out first down below ;) </p>
  </section>

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

<script lang="ts">

export let title: string;
export let capt: string = "";
export let date: string = "";
export let link: string;

</script>


<a class="result-card" href={link}>
  <div>
    <h4> {title} </h4>
    <p class="caption"> {capt} </p>
  </div>
  <div>
    <p> {date} </p>
  </div>
</a>


<style lang="scss">

@use 'sass:list';


a.result-card {
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;

  background-color: transparent;
  border-radius: 1rem;
  @include trans-default;

  @include interactive(
    var(--col-card),
    var(--col-card)
  );
}

h4 {
  @include font-head;
  font-size: 150%;
  color: var(--col-text-prot);
}

h4 + p.caption {
  @include font-body;
  font-size: 125%;
  color: var(--col-text-deut);
}

p {
  color: var(--col-text-deut);
  font-size: 100%;
}

</style>

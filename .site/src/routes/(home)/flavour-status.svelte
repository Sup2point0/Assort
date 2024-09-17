<script>

import { Statuses } from "#src/site";


let date = new Date();

let index = (
  //   date.getFullYear()
  // ** date.getMonth()
  // * date.getDay()
  // * 69
// ) % Statuses.length;
Math.floor(Math.random() * Statuses.length));

let status = Statuses[index];

</script>


<div class="flavour-status">
  <p> {status} </p>
</div>


<style lang="scss">

.flavour-status {
  min-width: 20rem;
  margin: 1rem 0 3rem;
  padding: 0.5rem 0;
  text-align: center;
  background-color: light-dark(white, black);
  border-radius: 1rem;
  filter: drop-shadow(0 2px 3px rgba(black, 20%))
}

p {
  margin: 0 1.5em;
  @include font-hand;
  color: var(--col-prot);
  font-size: 120%;
}

</style>

<script>

import { Statuses } from "#src/site";


let date = new Date();

let index = (
    date.getFullYear()
  ** date.getMonth()
  * date.getDay()
  * 69
) % flavourStatuses.length;

let status = flavourStatuses[index];

</script>


<div class="flavour-status">
  <p> {status} </p>
</div>


<style lang="scss">

.flavour-status {
  width: 100%;
  margin-bottom: 2rem;
  padding: 0.5rem 0;
  text-align: center;
  background-color: $lilac-cresc;
}

p {
  margin: 0;
  @include font-hand;
  color: $purp-nova;
  font-size: 200%;
}

</style>

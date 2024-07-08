<script>

import { flavourStatuses } from "#src/site-config";


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

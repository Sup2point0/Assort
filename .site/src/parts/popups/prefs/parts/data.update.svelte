<script>

import { prefs } from "#modules/stores";
import { updatePrefs } from "#modules/stores/prefs";

import Click from "#parts/ext/click.svelte";

</script>


<Click kind="prot" button={() => updatePrefs($prefs)}
  style="border-radius: 0.5rem; padding: 0.5em 1em;"
>
  <p> Update Preferences </p>
</Click>

<script>

import { prefs } from "#modules/stores";

import PrefsCell from "../parts/prefs.cell.svelte";

import UpdatePrefs from "../parts/data.update.svelte";
import ExportPrefs from "../parts/data.export.svelte";
import ImportPrefs from "../parts/data.import.svelte";

</script>



<p> Preferences are saved to local storage. </p>

<PrefsCell name="Update Preferences"
  desc="Update your preferences format to include newer options."
>
  <UpdatePrefs />
</PrefsCell>

<PrefsCell name="Export Preferences"
  desc="Export preferences as a JSON file."
>
  <ExportPrefs />
</PrefsCell>

<PrefsCell name="Import Preferences"
  desc="Import preferences from a JSON file."
>
  <ImportPrefs />
</PrefsCell>


<style lang="scss">

@use './src/styles/prefs' as *;


p.caption {
  @include font-body;
  font-size: 80%;
  font-weight: 400;
  color: var(--col-text-deut);
}

</style>

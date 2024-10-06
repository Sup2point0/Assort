<script>

import { prefs } from "#modules/stores";
import { Preferences } from "#modules/types";

import PrefsCell from "../parts/prefs.cell.svelte";

import UpdatePrefs from "../parts/data.update.svelte";
import ExportPrefs from "../parts/data.export.svelte";
import ImportPrefs from "../parts/data.import.svelte";


const newPrefs = new Preferences();

</script>


<p> Preferences are saved to local storage. </p>

<PrefsCell name="Update Preferences"
  desc="Update your preferences format to include newer options.
  <br><br>
  You are on
    <span style='color:var(--col-prot)'>
      v{$prefs._version}</span>.
  Latest version is
    <span style='color:var(--col-prot)'>
      v{newPrefs._version}</span>."
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

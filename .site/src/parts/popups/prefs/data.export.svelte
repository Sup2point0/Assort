<script>

import { prefs } from "#modules/stores";

import Click from "#src/parts/ext/click.svelte";


function exportPrefs() {
  const data = JSON.stringify($prefs);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "assort-prefs.json";
  a.click();
}

</script>


<Click button={exportPrefs}>
  Export JSON
</Click>

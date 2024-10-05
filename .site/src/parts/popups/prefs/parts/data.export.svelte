<script>

import { prefs } from "#modules/stores";

import Click from "#parts/ext/click.svelte";


function exportPrefs() {
  const data = JSON.stringify($prefs, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "assort-prefs.json";
  a.click();
}

</script>


<Click kind="prot" button={exportPrefs}
  style="border-radius: 0.5rem; padding: 0.5em 1em;"
>
  Export JSON
</Click>

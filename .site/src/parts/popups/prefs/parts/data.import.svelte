<script>

import { prefs } from "#modules/stores";

import Click from "#parts/ext/click.svelte";


function importPrefs() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "application/json";
  input.onchange = async () => {
    const file = input.files?.[0];
    if (!file) return;

    const data = await file.text();
    const json = JSON.parse(data);

    console.log(json);
  };

  input.click();
}

</script>


<Click kind="prot" button={importPrefs}
  style="border-radius: 0.5rem; padding: 0.5em 1em;"
>
  <p> Import JSON </p>
</Click>

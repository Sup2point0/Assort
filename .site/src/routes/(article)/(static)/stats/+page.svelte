<script lang="ts">

import Site from "#src/site";


const files = Site.meta.file_count;
const pages = Site.meta.page_count;
const slocs = (
  Object.values(Site.pages)
  .map(page => page.slocs)
  .reduce((t, s) => s ? t + s : t, 0)
);
const chars = (
  Object.values(Site.pages)
  .map(page => page.chars)
  .reduce((t, s) => s ? t + s : t, 0)
);

</script>


<table>
  <tr>
    <th> source files </th>
    <td> {files} </td>
  </tr>
  <tr>
    <th> deployed pages </th>
    <td> {pages} </td>
  </tr>
  <tr>
    <th> total slocs </th>
    <td> {slocs} </td>
  </tr>
  <tr>
    <th> total chars </th>
    <td> {chars} </td>
  </tr>
</table>


<style lang="scss">

@use './src/styles/pages/article' as *;


td, th {
  padding: 0.75em 1em;
}

th {
  text-align: left;
}

</style>

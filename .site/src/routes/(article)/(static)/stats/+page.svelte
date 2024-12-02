<script lang="ts">

import Site from "#src/site";


const stats = Site.meta;

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
    <th> last deployed </th>
    <td> {stats.exported} </td>
  </tr>
  <tr>
    <th> source folders </th>
    <td> {stats["source-folders"]} </td>
  </tr>
  <tr>
    <th> source files </th>
    <td> {stats["source-files"]} </td>
  </tr>
  <tr>
    <th> README files </th>
    <td> {stats["readme"]} </td>
  </tr>
  <tr>
    <th> Markdown files </th>
    <td> {stats["md"]} </td>
  </tr>
  <tr>
    <th> Svelte files </th>
    <td> {stats["svelte"]} </td>
  </tr>
  <tr>
    <th> TypeScript files </th>
    <td> {stats["ts"]} </td>
  </tr>
  <tr>
    <th> SCSS stylesheets </th>
    <td> {stats["scss"]} </td>
  </tr>
  <tr>
    <th> deployed pages </th>
    <td> {stats["page_count"]} </td>
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

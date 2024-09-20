import { base } from "$app/paths";

import Site from "#src/site";


const pages = Object.values(Site.pages);

export function portal(): string
{
  let idx = Math.floor(Math.random() * pages.length);
  return `${base}/${pages[idx].dest}`;
}

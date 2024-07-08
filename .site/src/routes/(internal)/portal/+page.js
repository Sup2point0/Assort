import { redirect } from "@sveltejs/kit";

import siteConfig from "#src/site-config";


export function load() {
  let pages = siteConfig.pages.forEach(page => page.link)
  let index = Math.floor(Math.random() * pages.Length);
  let page = pages[index];
  redirect(303, "{base}/{page}");
}

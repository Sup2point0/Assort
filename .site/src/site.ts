// == BASE == //
import { dev } from "$app/env";

/** The base path to prepend to URLs. In development this is blank (for `localhost`), in production it becomes `/Assort` for `sup2point0.github.io/Assort`. */
export const BASE = dev ? "" : "/Assort";


// == SITE == //
import type { PageData } from "#scripts/types";

import { TAGS } from "./tags";
import { pages, tags } from "#src/data/site.json" with { type: "json" };

/** Aggregated site data from Squarkdown. */
export const SITE: SiteData = {
	pages,

	tags: Object.fromEntries(
		Object.entries(tags)
			.map(([tag, pages]) => [
				tag,
				{
					title: TAGS[tag] ?? (tag[0].toUpperCase() + tag.slice(1)),
					pages: pages
				}
			])
	),
} satisfies SiteData;
export default SITE;

/** Aggregated site data from Squarkdown. */
interface SiteData
{
	pages: Record<string, PageData>

	tags:
		Record<string, {
			title: string
			pages: string[]
		}>
}

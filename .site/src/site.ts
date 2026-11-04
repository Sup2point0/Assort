import { dev } from "$app/env";


import { pages, tags } from "#src/data/site.json" with { type: "json" };


/** The base path to prepend to URLs. In development this is blank (for `localhost`), in production it becomes `/Assort` for `sup2point0.github.io/Assort`. */
export const BASE = dev ? "" : "/Assort";

/** Aggregated site data from Squarkdown. */
export const SITE = { pages, tags };
export default SITE;
